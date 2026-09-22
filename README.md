# VGM14 Gig Sheet: offline app

A phone app for mixing a four-piece from stage on a Yorkville VGM14. It installs
to your home screen and, once you've opened it one time, works with no signal.
That matters because venues rarely have any.

## What's in it

Four tabs along the bottom:

- **Setlist**: the big **Start gig** button (it becomes **Resume gig** if you
  closed gig mode partway through), then every song. Tap a song to open it:
  - the whole board drawn with this song's positions. Controls that differ from
    the tape are ringed in orange. Tap it for full screen.
  - all ten faders in board order at their **actual position** on the printed
    scale (`0`, `+4`, `−6`), with your tape mark beside each one.
  - the per-song reverb, which is the **EFX Return to MAIN** fader: Dry −12,
    Normal −6, Wet −3 (preset 6, Plate Reverb – Vocals).
  - to change a fader, tap it, then use the big − / + buttons (1 dB per tap).
    The board redraws as you go.
  - the song's template, soloist, cues and notes, and **Reset this song** (tap twice).
  - **‹ ›** (or a swipe) moves to the next or previous song, and **Play from here** starts gig mode at this song.

  **Manage** has the default soloist, song order and delete, templates, adding
  songs, backup / restore, and **Reset app** (tap twice). Reset app wipes
  everything the app saved on the phone and reloads with the starter setlist.
  The offline copy stays.
- **Checklist**: the outdoor load-in, in phases along a progress rail. The next
  step is shown large. Finished phases fold up and can be reopened.
- **Board**: a drawing of the whole VGM14 top panel at the tape positions, in the
  numbers printed on the real panel, with the master-section notes and channel notes.
- **Reference**: troubleshooting, quick notes, EQ, routing, stage plot, cables and the rest,
  written for an outdoor show. Each section folds open.

**Full screen board**: tap any board, or turn the phone sideways on Board, a song
or gig mode. It has Fit / 2× / 3× zoom, and double-tap zooms too. Close it with ×,
Esc or the back button. Turning the phone upright again closes it.

**Gig mode** keeps the screen awake and has its own **Day / Night** switch
(Day is high-contrast for sun). It shows one song at a time: the title,
**Move these** (only the faders that change from the previous song, with where
they go), all 16 faders, the cues and what's next. Tap **Next**, swipe, or use
the arrow keys. Press and hold the title (or tap the list button) to jump to any
song. It remembers where you were.

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
2. Bump `VERSION` in `sw.js` (e.g. `v4` → `v5`).
3. Push.

The next time the app is opened with signal, it shows **Update available: tap to reload**.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app. Self-contained apart from the Google Fonts link. |
| `sw.js` | Service worker: offline cache and the update prompt. |
| `manifest.webmanifest` | Name, icons, colours, standalone display in any orientation. |
| `icon-*.png` | App icons, including a maskable one for Android. |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are. |
