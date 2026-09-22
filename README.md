# VGM14 Gig Sheet: offline app

A phone app for mixing a four-piece from stage on a Yorkville VGM14. It installs
to your home screen and, once you've opened it one time, works with no signal.
That matters because venues rarely have any.

## What's in it

Four tabs along the bottom:

- **Setlist**: the big **Start gig** button (it becomes **Resume gig** if you
  closed gig mode partway through), then every song. Tap a song to open its dial sheet:
  - all ten faders drawn in board order, each at its **actual position**
    (`U`, `+4`, `−6`), with your tape mark beside each one. Faders that aren't
    on the tape are highlighted orange.
  - the EFX (vocal reverb) knob at its clock position.
  - to change a fader, tap it, then use the big − / + buttons (1 dB per tap).
  - the song's template, soloist, cues and notes.
  - **‹ ›** (or a swipe) moves to the next or previous song, and **Play from here** starts gig mode at this song.

  **Manage** has the default soloist, song order and delete, templates, adding
  songs, and backup / restore.
- **Checklist**: the load-in list, grouped, with a progress bar. Tap anywhere on a row to tick it.
- **Board**: the starting settings for every channel as cards, the master section, and the console drawing.
- **Reference**: troubleshooting, quick notes, EQ, routing, stage plot, cables and the rest. Each section folds open.

**Gig mode** is always dark and keeps the screen awake. It shows one song at a time:
the title, **Move these** (only the faders that change from the previous song,
with where they go), a compact view of all the faders, the cues and what's next.
Tap **Next**, swipe, or use the arrow keys. It remembers where you were.

Everything is saved on the phone (`localStorage`). Use **Manage → Backup & restore**
to copy or download the setlist, or to move it to another phone.

## Putting it on GitHub Pages

1. Create a **public** repo (e.g. `vgm14-gig-sheet`) and upload everything in this
   folder, including `.nojekyll`.
2. **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**
3. A minute later it's live at `https://<your-username>.github.io/vgm14-gig-sheet/`

All paths are relative, so it works under that subfolder.

## Installing it on your phone

- **iPhone (Safari):** open the URL → Share → **Add to Home Screen**
- **Android (Chrome):** open the URL → ⋮ menu → **Install app** (or **Add to Home screen**)

Open it once while you have signal. After that it loads in airplane mode.

## To update

1. Edit the files.
2. Bump `VERSION` in `sw.js` (e.g. `v3` → `v4`).
3. Push.

The next time the app is opened with signal, it shows **Update available: tap to reload**.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app. Self-contained apart from the Google Fonts link. |
| `sw.js` | Service worker: offline cache and the update prompt. |
| `manifest.webmanifest` | Name, icons, colours, standalone portrait display. |
| `icon-*.png` | App icons, including a maskable one for Android. |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are. |
