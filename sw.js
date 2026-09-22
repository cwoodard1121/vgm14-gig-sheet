/* VGM14 Gig Sheet — offline cache.
   Venues have bad signal; the whole app must work with no network.
   To ship an update: edit, bump VERSION, push. Phones show "Update available". */
const VERSION = "v5";
const CACHE = "gigsheet-" + VERSION;
const CORE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-180.png",
  "./icon-maskable-512.png"
];
// Must match the <link rel="stylesheet"> in index.html exactly.
const FONT_CSS = "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Barlow+Condensed:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap";
// Caches from versions that auto-activated (before the update prompt existed).
const LEGACY = ["gigsheet-v1", "gigsheet-v2"];

// Best effort: cache the font CSS and its Latin font files during install, so the
// fonts work offline even though the page requested them before this worker existed.
async function cacheFonts(cache){
  const res = await fetch(FONT_CSS, {mode: "cors", credentials: "omit"});
  if (!res.ok) return;
  const css = await res.clone().text();
  await cache.put(FONT_CSS, res);
  const blocks = css.match(/\/\*\s*latin\s*\*\/\s*@font-face\s*\{[^}]*\}/g) || [];
  const urls = new Set();
  blocks.forEach((b) => {
    const m = b.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/);
    if (m) urls.add(m[1]);
  });
  await Promise.all([...urls].map((u) =>
    fetch(u, {mode: "cors", credentials: "omit"})
      .then((r) => (r.ok ? cache.put(u, r) : null))
      .catch(() => null)
  ));
}

self.addEventListener("install", (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(CORE);
    await cacheFonts(cache).catch(() => {});
    // First install (nothing controlling the page yet), or replacing an old version
    // that has no update prompt: take over now. Otherwise wait until the page asks.
    const keys = await caches.keys();
    if (!self.registration.active || keys.some((k) => LEGACY.includes(k))) {
      await self.skipWaiting();
    }
  })());
});

self.addEventListener("message", (e) => {
  if (e.data && e.data.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;

  // Navigations: serve the cached shell immediately, refresh it in the background.
  if (req.mode === "navigate") {
    e.respondWith(
      caches.match("./index.html").then((cached) => {
        const net = fetch(req).then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put("./index.html", copy));
          }
          return res;
        }).catch(() => cached);
        return cached || net;
      })
    );
    return;
  }

  // Everything else (including the Google Fonts CSS and font files):
  // cache first, then network, and keep whatever the network gives us.
  e.respondWith(
    caches.match(req, {ignoreVary: true}).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        if (res && (res.ok || res.type === "opaque")) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => cached);
    })
  );
});
