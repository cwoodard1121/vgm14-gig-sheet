# Plan — full VGM14 board render + outdoor gig pass

Source of truth for the hardware: `docs/VGM14-panel.md` (from the 2013 owner's manual) and the manual cover
drawing (kept out of the repo). Where this plan and the panel doc disagree on hardware, the panel doc wins.



## 1. One board renderer, used everywhere
`renderBoard(state, opts)` → a single inline SVG of the whole VGM14 top panel, laid out like the manual cover:
- **Input row** (compact): jack row per strip with the source name (Kick, Snare…) as a scribble strip; the jack in use is lit (XLR for mics, Line for Gtr 1 on 11/12). 13/14 labelled "spare".
- **12 channel strips** 1–10, 11/12, 13/14, top→bottom exactly as printed:
  Set Level/Clip LEDs · 80Hz HPF switch · Gain (red cap, dual ring) · High 12kHz · Mid · Mid Sweep · Low 80Hz ·
  Mon (blue cap, blue-grey band) · Aux (blue cap) + Pre/Post switch · EFX (mint cap, green band) · Pan (black cap) ·
  60 mm fader with printed scale `+10 +6 0 −3 −6 −12 −24 −∞` (0 at 69 %), Mute + Clip LED, Solo + LED · number box.
  Stereo strips: High 12k · High Mid 3k · Low Mid 400 · Low 80 (no sweep), Bal instead of Pan.
- **Master block**: Equalizer (9 sliders 63…16K, ±12, Assign Main/Mon switch) · VU meter (decorative, lit to ~0) ·
  Media Out/In level knobs · Phones · Aux Send · 24-bit EFX panel (EFX Send, EFX to MON, 16-way preset selector
  pointing at the chosen preset, Modify) · Zone/Sub · BREAK switch · master faders MON (blue) · EFX Return to MAIN (blue) ·
  STEREO Return (blue) · MAIN (red), master scales per the panel doc.
- Realistic charcoal panel in both app themes; colours per the panel doc.
- **Every value is shown in the unit printed on the real panel** — never clock positions:
  gain "+20 dB mic" / "−20 dB line", EQ "+3" / "0", sweep "375 Hz", sends "7.5" (0–10), faders "0" / "−4" / "+6", pan "C" / "L" / "R".
- `opts.highlight` = set of control ids to ring in the accent colour (changed from tape, or from the previous song).
- `opts.crop`: `"full"` | `"faders"` (fader row of all 16 faders only, for portrait gig mode).

## 2. Where it shows
| Screen | Portrait | Tap / landscape |
|---|---|---|
| Board tab | full board at tape positions, sideways-scrollable holder, "Tap to open full screen" | full-screen viewer |
| Song screen | full board with this song's positions, changed controls highlighted; fader editor underneath (− / + in 1 dB) | full-screen viewer |
| Gig mode | "Move these" chips + `faders` crop of the board (changes vs previous song highlighted) | full-screen viewer, whole board |

**Full-screen viewer**: fixed overlay, fits the whole board to the screen, zoom buttons (Fit / 2× / 3×) and double-tap zoom,
pans by scrolling, × to close, Android back / Esc closes. **Rotating to landscape** on Board / Song / Gig opens the viewer
automatically, fitted to width; rotating back closes it if rotation opened it. Manifest `orientation` → `"any"`.

## 3. Data corrections (from the panel doc §8)
- `CH` re-expressed in printed units: gain in dB on the right ring, EQ bands in the panel's order, sends 0–10
  (clock − 7), HPF on every channel incl. stereo, phantom as one global rear switch, correct stereo EQ names.
- Per-song reverb = **EFX Return to MAIN fader**: Dry −12 · Normal −6 · Wet −3 (dB). Preset **#6 Plate Reverb – Vocals**.
- Master: MAIN 0 · MON −6 (raise to taste) · STEREO Return −∞ · Aux Send 0 · EFX Send 5 · EFX to MON 0 · Zone/Sub 3 ·
  Modify centre · BREAK off · Equalizer on MAIN, outdoor curve (below).
- Fader scale + law fixed everywhere (dial sheet, gig chips, board): printed marks, "0" not "U".
- Fix wrong notes: Gtr 1 gain/stereo note, "powered mixer" wording, "MON −10", "short plate", EFX "10:30" cues.
- Channel 13/14 drawn as spare: fader −∞, muted.

## 4. Outdoor gig
- Content pass: EQ-by-symptom, ringing out, drummer wedge, troubleshooting and quick notes rewritten for outdoors
  (no room reverb, low end dies with no walls, less feedback but runs out of level, wind, sun, power).
- Graphic EQ outdoor start: 125 Hz +2, everything else 0 (63 Hz stays 0 — the 12s roll off ~55 Hz).
- Checklist additions: windscreens on vocal mics, power source + heavy cords, board cover / tarp, tape cable runs, BREAK between sets.
- Gig mode **Day / Night** toggle (Day = high-contrast light for sun), remembered; default Day.

## 5. Setlist + reset
- This Love: Gtr 1 (you) covers the piano part → Gtr 1 +2 from tape; cue rewritten.
- Song cues that say "+2" etc. rewritten to absolute positions ("Vox 1 up to +5").
- **Reset this song** (song screen) and **Reset app** (Manage: wipes all app localStorage, keeps the offline cache, reloads) — both two-tap confirm.
- Storage key bumped to `vgm14-setlist-v2` so phones pick up the new starter setlist automatically.

## 6. Verify, then ship
Chromium **and WebKit** (iPhone engine), 390×844 + 360×740 portrait and 844×390 landscape, light + dark, gig Day + Night:
no console errors, no page-level horizontal scroll, board renders every control (count strips/knobs/faders in the DOM),
landscape auto-viewer, reset flows, offline reload. Screenshots reviewed, then `sw.js` VERSION bump, commit, push to GitHub Pages, re-check live.
