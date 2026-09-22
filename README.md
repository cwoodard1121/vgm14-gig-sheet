# VGM14 Gig Sheet — offline app

A self-contained, installable web app. Once it's on a URL and you've opened it
once, it works with no signal — which is the point, because venues don't have any.
Checkbox state is saved in the browser on your phone.

## Fastest way up (about 60 seconds, no account needed to test)

1. Go to **https://app.netlify.com/drop**
2. Drag this whole folder onto the page.
3. You get a URL immediately. Open it on your phone.

Make a free account if you want to keep the URL permanently.

## GitHub Pages

1. Create a new **public** repo (e.g. `vgm14-gig-sheet`) at https://github.com/new
2. On the repo page click **Add file → Upload files**, drag in everything from
   this folder, commit.
3. **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**
4. A minute later it's live at
   `https://<your-username>.github.io/vgm14-gig-sheet/`

Pages needs the repo to be public unless you have GitHub Pro.

## Installing it on your phone

- **iPhone (Safari):** open the URL → Share button → **Add to Home Screen**
- **Android (Chrome):** open the URL → ⋮ menu → **Install app** / **Add to Home screen**

It then opens fullscreen with no browser chrome, and the service worker keeps a
copy of everything, so it loads with the phone in airplane mode.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole sheet. Self-contained apart from the Google Fonts link. |
| `manifest.webmanifest` | Name, icons, colours, standalone display mode. |
| `sw.js` | Service worker. Caches the shell on install, cache-first after that. |
| `icon-*.png` | App icons, including a maskable one for Android. |

## Notes

- Fonts load from Google Fonts on first visit and are then cached. Offline before
  that first load, it falls back to the system font — readable, just not as nice.
- The checkboxes use `localStorage`, so they live on that one phone in that one
  browser. Clearing site data resets them. There's a **Clear checkboxes** button
  at the bottom of the load-in section.
- To update the sheet later, replace `index.html` and bump `VERSION` in `sw.js`
  (e.g. `v1` → `v2`) so phones pick up the new copy instead of the cached one.
