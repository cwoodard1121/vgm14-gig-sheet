# Yorkville VGM14 — front (top) panel reference

Researched 2026-09-22 so the app's on-phone channel strips can copy the real board.

## Sources

| Key | Source |
|---|---|
| **[OM]** | *VGM14 Owner's Manual*, Yorkville Sound, doc `manual-owners-VGM14-00-3v0`, March 28 2013, type YS1097. Official URL `https://yorkville.com/downloads/ownersman/om_vgm14.pdf` is behind a Cloudflare challenge, so the identical PDF was downloaded from the Internet Archive mirror: `https://archive.org/download/manualzilla-id-7399974/7399974.pdf` (36 PDF pages). Page refs below are **PDF page / printed page**. |
| **[OM-cover]** | [OM] PDF p.1, the cover. It is a full-colour, to-scale drawing of the whole top panel with every legend legible. It was extracted at native resolution and zoomed in, and most of the layout facts below come from it. |
| **[OM-block]** | [OM] PDF p.34, the block diagram. |
| **[LM]** | Long & McQuade, "Yorkville Sound 14 Channel Compact Desk Mixer" (VGM14, SKU 384167): https://www.long-mcquade.com/20283/Pro-Audio-Recording/Mixers/Yorkville-Sound/14-Channel-Compact-Desk-Mixer.htm |
| **[AC]** | Acclaim Sound & Lighting listing: https://www.acclaim-music.com/yorkville-sound-vgm14-compact-14-channel-live-sound-mixer-with-effects-and-usb.html |
| **[FL]** | Farralane listing: https://www.farralane.com/yorkville-vgm14.html |
| **[BH]** | B&H title from search results only (the page itself returned 403): "Yorkville Sound VGM14 Passive Compact Mixer…" https://www.bhphotovideo.com/c/product/1012077-REG/yorkville_sound_vgm14_10_mono_xlr.html |
| **[YS]** | Yorkville product page (returned 403; only the search-result title was seen): "VGM14 – 14-Channel Mixer with Effects and USB", URL path `/mixers/passive/product/vgm14/` |

"Drawing-measured" means the value was read or measured from the [OM-cover] drawing and is approximate. Anything marked **UNCONFIRMED** could not be verified.

---

## 0. Identity: it is **not** a powered mixer

- The full name printed on the panel is **"vgm14 — compact live sound mixer"** [OM-cover]. Retailers call it a "14 Channel Compact Desk Mixer" [LM] and a "Passive Compact Mixer" [BH]. Yorkville files it under `/mixers/passive/` [YS].
- **There is no power amp and no wattage.** The rear panel is labelled "100-240 V~ 50-60Hz 60W MAX", which is power *consumption*. Typical draw is 26 VA [OM p.15/11, p.18/14]. Outputs are line level only: Main XLR + TRS, Mon, Aux, EFX Send, Zone/Sub and Media [OM p.15–16].
- It has 14 input channels: 10 mono (1–10) and 2 stereo (11/12, 13/14) [OM p.18/14 specs; LM].
- The app already treats it as unpowered (powered YXL speakers, Kustom amp), so this is consistent. Just don't label it a "powered mixer" anywhere.

## 1. Channels and inputs (top jack row)

The legends at the top of each strip read `1 2 3 4 5 6 7 8 9 10 11/12 13/14` [OM-cover].

| Ch | Printed jacks, top→bottom | Notes |
|---|---|---|
| 1–8 | **Mic** (XLR), **Line** (1/4" TRS), **Insert** ("Ring: RETURN / Tip: SEND") | mono [OM-cover; OM p.6/2, p.7/3] |
| 9, 10 | **Mic** (XLR), **Line** (1/4"), a **Hi-Z** push switch with a guitar icon, **Insert** | Hi-Z switches the 1/4" jack to an unbalanced instrument input [OM p.6/2; OM-cover] |
| 11/12, 13/14 | **Mic** (XLR), **Line** "MONO/L" (1/4"), **Line** "R" (1/4") | Each is **one** stereo strip. L/Mono normals to R when R is empty. **No insert** [OM p.6/2; OM-cover]. Spec: 12 XLR, 14 × 1/4" line, 10 inserts [OM p.18/14]. |

## 2. Mono channel strip (1–10), exact top→bottom order [OM-cover]

| # | Printed label | Control | Printed scale and notes |
|---|---|---|---|
| 1 | **Set Level** (green LED) · **Clip** (red LED) | 2 LEDs side by side | Set Level flashes at the correct gain. Solid means the channel compressor is working [OM p.7/3]. Clip lights 3 dB before real clipping [OM p.7/3]. |
| 2 | HPF icon + **80Hz** | Square push switch | 80 Hz, 18 dB/oct. The manual puts it "at the top of the channel strip" [OM p.8/4]. |
| 3 | **Gain** / **dB** | Knob, **red** cap | Two printed rings [OM p.7/3]:<br>• **outer "mic" ring:** −24 … +60, printed marks **−24, −10, 0, +10, +20, +35, +40, (one unlabelled tick at about 3:00), +60**<br>• **inner "line" ring:** −36 … +45, printed marks **−36, −20, 0, +10, +20, +30, +45**<br>Each ring has a small **flag at its 0**. See the clock table below. |
| 4 | **High** / **12kHz** | Knob | **−15 · 0 · +15**, "dB", 11 ticks, 0 at 12:00. Shelving, ±15 dB [OM p.8/4]. |
| 5 | **Mid** | Knob (mid gain) | **−15 · 0 · +15**, "dB", 11 ticks. A vertical bar in the legend links Mid to Mid Sweep. |
| 6 | **Mid Sweep** | Knob (frequency) | **150 · 250 · 400 · 1K · 1.5K · 3K · 5K**, "Hz". Range 150 Hz–5 kHz [OM p.8/4]. |
| 7 | **Low** / **80Hz** | Knob | **−15 · 0 · +15**, "dB". Shelving, ±15 dB [OM p.8/4]. |
| 8 | **Mon** | Knob, **blue** cap, on a light blue-grey band | **0 1 2 3 4 5 6 7 8 9 10**, every number printed. **Pre-fader** [OM p.10/6]. |
| 9 | **Aux** + **Pre / Post** switch | Knob, **blue** cap, with a square switch to its right | **0 … 10** (only 0 and 10 printed, 11 ticks). The switch icon shows up = **Pre**, down = **Post** [OM p.10/6]. |
| 10 | **EFX** | Knob, **mint-green** cap, on a green band | **0 … 10** (only 0 and 10 printed). **Post-fader** [OM p.10/6]. |
| 11 | **Pan** | Knob, **black** cap | A **dot at 12:00** and arrows to **L** and **R**. Post-fader, with constant-power compensation [OM p.11/7]. |
| 12 | **Clip** (red LED) above **Mute** (square switch) | LED + switch, to the right of the fader | The Clip/Mute LED glows at half brightness when muted [OM p.11/7]. |
| 13 | yellow LED above **Solo** (square switch) | LED + switch, to the right of the fader | PFL to the VU meter and phones [OM p.11/7]. |
| 14 | channel fader, **dB** | **60 mm slide fader**, light-grey cap | See §3. The channel number is printed again in a white box at the very bottom. |

All mono channels also have a built-in soft-knee compressor that cannot be switched off. It is driven by the Gain knob [OM p.8/4; LM "Non-defeatable soft multi-slope compressor"].

**Sweep knob clock positions (drawing-measured):** 150 at 7:00 · 250 at 9:00 · 400 at 10:30 · **1K at 12:00** · 1.5K at 1:30 · 3K at 3:00 · 5K at 5:00. The marks are spaced evenly in clock terms, so the printed law is **not** a pure log sweep.

**Send knobs (Mon, Aux, EFX, and all 0–10 master knobs):** 0 at 7:00, 5 at 12:00, 10 at 5:00. That is 1 unit per 30°, so **number = clock hour − 7** (7:00→0, 9:00→2, 10:30→3.5, 12:00→5, 1:00→6, 2:30→7.5).

**Gain ring, approximate clock map (drawing-measured, ±15 min):**

| Clock | 7:00 | 8:00 | ~8:30 | ~9:10 | ~9:25 | ~10:15 | ~10:45 | 12:00 | ~12:40 | 1:30 | ~2:45 | 5:00 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Mic ring | −24 | −10 | 0 | +10 | | +20 | | **+35** | | +40 | | +60 |
| Line ring | −36 | −20 | | | 0 | | +10 | | +20 | | +30 | +45 |

**Detents:** the manual never mentions centre detents on the EQ, Pan or Bal knobs. Their 0 / centre-dot legends suggest detents, but this is **UNCONFIRMED**.

## 3. Faders

- **Type:** slide faders, **60 mm**, on every channel and every master [LM "60mm Faders Throughout"; AC; FL]. The drawing-measured slot is about 66 mm including the cap, which is consistent with 60 mm of travel.
- **Channel fader scale, top→bottom exactly as printed** [OM-cover]: **`10 · 6 · + · 0 · − · 3 · 6 · 12 · 24 · ∞`**, then "dB" under the bottom-left of the scale. The "+" and "−" are printed signs above and below the 0, so the marks read **+10, +6, 0, −3, −6, −12, −24, −∞**. Short unlabelled ticks sit between them. A dotted "usual operating zone" covers roughly +6 to −3. The printed zero is plain **0**, not "U".
- **Mark positions** as a fraction of the printed scale span from −∞ (0) to +10 (1), drawing-measured and approximate:

| Mark | +10 | +6 | 0 | −3 | −6 | −12 | −24 | −∞ |
|---|---|---|---|---|---|---|---|---|
| Position | 1.00 | 0.85 | **0.69** | 0.52 | 0.34 | 0.20 | 0.11 | 0.00 |

- The manual describes the law as "expanded in the upper mid-slide area … condensed at the extremes" [OM p.12/8].
- **Master fader scales** [OM-cover]. The spacing matches the channel faders, but the labels differ:
  - MON, EFX Return to MAIN, STEREO Return: **10 · 6 · + · 0 · − · 3 · 6 · 18 · 30 · ∞**
  - MAIN: **10 · 6 · + · 0 · − · 3 · 9 · 18 · 30 · ∞**
  - The manual text agrees with the ends of these scales: MON "+10 … −18", MAIN "+10 … −30" [OM p.13/9].
- **Fader cap colours** [OM-cover]: channels are light grey, MON, EFX and STEREO are **blue**, and MAIN is **red**.

## 4. Stereo strips (11/12, 13/14): differences [OM-cover; OM p.10/6, p.11/7]

The order is the same as a mono strip, including **Set Level/Clip, the 80 Hz HPF switch and the same dual-ring Gain knob**. The specs list "Hi Pass Switches: Yes – All Channels" [OM p.18/14]. The differences are:

- **4-band fixed EQ**, top→bottom: **High 12kHz** (shelf; the manual text says 12.5 kHz but the panel prints 12kHz) · **High Mid 3kHz** · **Low Mid 400Hz** · **Low 80Hz** (shelf). All are **−15 · 0 · +15 dB**. There is **no sweep knob**.
- **Bal** (balance) replaces Pan. Same legend: dot at 12:00, L and R arrows.
- Mon, Aux + Pre/Post, EFX, Mute, Solo and the 60 mm fader are the same as a mono strip.
- **No compressor** (it is on channels 1–10 only) and **no insert** [OM p.8/4, p.18/14].

## 5. Master section [OM-cover; OM pp.12–15 / printed 8–11]

The top row, right of the input jacks, holds the logo panel and the **Effect Presets** list:

```
1. Room Reverb            5. Plate Reverb             9. Fast Echo           13. Flanger
2. Hall Reverb            6. Plate Reverb - Vocals   10. Short Decay Echo    14. Rotary Speaker
3. Hall Reverb - Vocals   7. Plate Reverb w/Echo     11. Long Decay Echo     15. Acoustic Guitar
4. Hall Reverb w/Echo     8. Gated Reverb            12. Chorus              16. Harmonizer
```

The 16-position **EFX** selector ring is grouped as ROOM (1) · HALLS (2–4) · PLATES (5–7) · GATE (8) · ECHO (9–11) · MODULATION (12–14) · guitar icon (15) · HAR (16).

Right-hand master block, top→bottom, left→right within each row:

1. **Jack row:** **Media IN** (RCA L/R) over **Media OUT** (RCA L/R, "USB on Rear") · **Stereo Return** (1/4" L/MONO over R) · **EFX Send** over **EFX Footswitch** · **Aux Send** over **Mon OUT** · **Lamp (LED ONLY)** (BNC 12 V) over **Phones**.
2. **Phantom** LED (yellow) and **Power** LED (green).
3. **Equalizer** (left) and **VU-Meter** (right):
   - The graphic EQ has **9 sliders at 63, 125, 250, 500, 1.0K, 2.0K, 4.0K, 8.0K, 16K**, scale **+12 · +6 · 0 · −6 · −12**, ±12 dB [OM p.14/10].
   - It is a stereo EQ with an **Assign** push switch: up = **Main** (L R), down = **Mon** (MONO). It serves one bus or the other, never both [OM p.14/10].
   - The VU meter is 2 columns of 10 LEDs reading **+10 (red), +6, +3 (yellow), 0, −2, −4, −7, −9, −18, −24 (green)**, post-Main-EQ [OM p.15/11].
4. **Media Output** block: "RCA & USB", green **Set Level** LED, **Clip** LED, **Level** knob 0–10. **Media Input** block: **Source** switch (USB / RCA), **Clip** LED, **Level** knob 0–10. Then the orange **Solo / Set Level** LED and the **Phones** knob 0–10.
5. **Aux Send** master knob (0–10, red cap) with its **Clip** LED. Next is the green **24-BIT DIGITAL EFFECTS** panel, holding:
   - **EFX Send** master knob (0–10, green cap) with its **Clip** LED
   - **EFX to MON** knob (0–10, green cap)
   - the 16-position **EFX** selector
   - **Modify** knob (− … +, red cap)
   - the **EFX Mute** LED, lit when the footswitch mutes the effects
   
   Then the **Zone/Sub** knob (0–10, red cap) with its **Clip** LED, and the **BREAK** switch with its LED, labelled "Mute All Input Channels".
6. **Master faders, left→right:** **MON** (light blue-grey strip) · **EFX Return to MAIN** (green strip) · **STEREO Return** (grey strip) · **MAIN** with L and R icons (a single stereo fader on a white strip). MON, STEREO and MAIN each show a Clip LED. The EFX strip's LED is hidden by the fader cap in the drawing, so it is **UNCONFIRMED**.

Routing facts:

- **Mon** is pre-fader. The MON fader feeds the **Mon OUT** 1/4" TRS on the top panel [OM p.13/9, p.15/11].
- **EFX** is post-fader. The EFX Send master feeds both the internal FX and the EFX Send jack. The internal FX return to Main through the **EFX Return to MAIN fader** and to Mon through the **EFX to MON knob** [OM p.12–13/8–9].
- **Aux** is pre or post per channel and feeds the **Aux Send** TRS on the top panel [OM p.10/6, p.15/11].
- **Zone/Sub** is a mono sum of Main L+R **taken after the Main fader**, with a level knob on top and a TRS jack on the **rear** [OM p.14/10, p.16/12]. Whether it is taken before or after the graphic EQ is **UNCONFIRMED**.
- **Phantom power is one global switch on the rear panel** [OM p.15/11; LM "Global 48 volt"]. The manual contradicts itself on which inputs it reaches. It says "all XLR microphone inputs, including the stereo channels" [p.15/11] and also "channels 1 through 10" [p.16/12]. The block diagram labels it "All Mics +48V" and draws a phantom circuit on the stereo inputs [OM-block].
- **USB:** a type-B jack on the rear, 2-in/2-out audio. The Media Out bus is separate and has its own Set Level LED [OM p.12/8, p.16/12].
- **Rear panel:** power switch, **48 Volt Phantom** switch, **MAIN Out** XLR L/R + TRS, **Zone/Sub** TRS, USB, IEC socket [OM p.15/11 rear drawing].
- **Busses:** MAIN, MONITOR, EFFECTS, AUX, MEDIA OUT [OM p.11/7].

## 6. Physical

- **Tabletop desk mixer.** There are no rack ears in the drawing, and rack mounting is **UNCONFIRMED/unlikely**. Steel chassis, fan-cooled, internal switching supply [OM p.18/14].
- **Size:** 16 × 19 × 2.8 in (D × W × H), 40.6 × 48.3 × 7.1 cm, 13 lb / 5.9 kg [OM p.18/14; LM; AC].
- **Layout:**
  - One long input-jack row runs across the top, with the logo and preset list at top right.
  - Below it, the **12 channel strips** fill the left ~⅔, in order 1…10, 11/12, 13/14.
  - The master block fills the right ~⅓.
  - Knob rows line up across all 12 strips. The Mon row sits on a **light blue-grey band** and the EFX row on a **green band**.
- **Colours** (all from the [OM-cover] drawing; real-unit photos were not checked, so treat shades as approximate):
  - Panel: dark charcoal grey. Retailers say "Gray finish" [FL].
  - Channel knobs have blue-violet skirts. Caps by row:

    | Knob | Cap colour |
    |---|---|
    | Gain | red |
    | EQ | light grey |
    | Mon, Aux | bright blue |
    | EFX | mint green |
    | Pan/Bal | black |
    | Master level knobs | red, except EFX Send and EFX to MON (green) |

  - Legends are white, with a white number box at the foot of each strip.

## 7. ASCII diagrams

One mono channel strip (1–10), top→bottom:

```
+------------------------+
|  [XLR  Mic ]           |  top jack row
|  [1/4" Line]           |  (ch 9/10: [Hi-Z] switch here)
|  [1/4" Insert] R:RET T:SEND
+------------------------+
|  Set Level (o)  Clip (o)|  green / red
|  /80Hz  [ HPF ]         |
|        Gain  dB         |  outer mic  -24 .. +35(12:00) .. +60
|        ( RED )          |  inner line -36 .. 0 .. +45
|  High 12kHz  (  )       |  -15  0  +15 dB
|  Mid         (  )  |    |  -15  0  +15 dB
|  Mid Sweep   (  )  |    |  150 250 400 1K 1.5K 3K 5K Hz
|  Low 80Hz    (  )       |  -15  0  +15 dB
|~~ Mon ~~~~~~ (BLUE) ~~~~|  0 1 2 3 4 5 6 7 8 9 10   (pre)
|  Aux (BLUE)   Pre/[ ]Post|  0 .. 10
|## EFX ####### (MINT) ###|  0 .. 10                  (post)
|  Pan  L ( • ) R         |  black cap, centre dot
|  10 -|   |     Clip (o) |
|   6 -|   |     [Mute]   |
|   + ::|: |              |
|   0 =|===|=    Solo (o) |  60 mm fader
|   - ::|: |     [Solo]   |
|   3 -|   |              |
|   6 -|   |              |
|  12 -|   |              |
|  24 -|   |              |
|   ∞ -|   |              |
|  dB                     |
|  [ 1 ]                  |
+------------------------+
```

Master section, left→right (top block, then fader row):

```
+----------+------------+-----------+-----------+-------------+
| Media IN | Stereo Rtn | EFX Send  | Aux Send  | Lamp (LED)  |
| Media OUT| L/MONO  R  | EFX Ftsw  | Mon OUT   | Phones      |
+----------+------------+-----------+-----------+-------------+
|                                   Phantom (o)  Power (o)    |
| Equalizer [Assign Main/Mon]                  | VU-Meter     |
|  63 125 250 500 1K 2K 4K 8K 16K  (+-12 dB)   | +10 +6 +3 0  |
|                                              | -2 -4 -7 -9  |
|                                              | -18 -24      |
| Media Output: SetLvl Clip (Level)  | Media Input: Source    |
|   RCA&USB                          |  USB/RCA Clip (Level)  |
|                                     Solo/SetLvl (o) (Phones)|
| (Aux Send)Clip | EFX Send Clip  EFX to MON  [EFX 1-16]  Modify| (Zone/Sub)Clip |
|                |                           EFX Mute (o)       | [BREAK] (o)    |
+--------+----------------+--------------+--------------------+
|  MON   | EFX            | STEREO       |  (L) MAIN (R)      |
| blue   | Return to MAIN | Return       |  red cap           |
| 10..∞  | 10..∞ blue     | 10..∞ blue   |  10 6 0 3 9 18 30 ∞|
+--------+----------------+--------------+--------------------+
```

---

## 8. Mismatches with the app (`index.html`: `CH`, `buildConsole()`, faders, master rows)

1. **Strip order is wrong.**
   - The app draws Gain, then the HPF pill, then Low, Mid freq, Mid gain, High.
   - The panel is **HPF (80Hz), then Gain, High 12kHz, Mid (gain), Mid Sweep (freq), Low 80Hz**. EQ runs **High at the top and Low at the bottom**, and the **Mid gain knob sits above the Sweep knob**.
2. **The stereo strip EQ is mislabelled and in the wrong order.**
   - The app's rows are Low, "Lo-mid", "Hi-mid", High, fed by `low/loMid/midG/high`.
   - The panel is **High 12kHz, High Mid 3kHz, Low Mid 400Hz, Low 80Hz**, with fixed frequencies.
   - Reusing `midG` as the stereo "Hi-mid" works but is confusing.
3. **The stereo HPF exists.**
   - The app has `hpf:null` for 11/12 and draws "NO HPF".
   - The VGM14 has an 80 Hz HPF on **all** channels, stereo included [OM-cover; OM p.18/14].
4. **The 11/12 gain note is wrong on two counts.**
   - "The preamp goes down to −24 dB": −24 dB is the **mic** ring. The G3Xn goes into the **Line** jack, whose ring runs **−36 … +45 dB**.
   - "Stereo costs a channel": 11/12 is **one** strip with L/Mono + R jacks, so running stereo costs nothing extra. It does cost stereo-chorus content in the mono Zone/Mon sums, as the note says.
5. **The fader scale and law are wrong.**
   - The app's `MARKS` are +10, +5, U, −5, −10, −20, −30, −∞, and its `PTS` place 0 dB at 0.75 and −10 at 0.50.
   - The printed channel scale is **+10, +6, 0, −3, −6, −12, −24, −∞**, with 0 at about **0.69**, −6 at about 0.34 and −12 at about 0.20.
   - The printed zero is "**0**", not "U".
   - There are **no −5/−10/−20/−30 marks on channel faders**. −30 exists only on the master faders.
   - `buildConsole()` also uses a linear −30…+10 map with unity at 75%. That puts the toms and OH (−3 to −6) much higher than they sit on the real fader.
6. **"MON fader −10 dB"** (master rows) has no printed mark. The MON scale is 10, 6, 0, 3, 6, 18, 30, ∞. Use −6 or "just below the −6 line".
7. **EFX return is a fader, not a knob.**
   - `FX_KNOB`/`FX_CLOCK` (9:00, 10:30, 12:00), the "EFX return 9–10 o'clock" row and the Free Bird cue "EFX back to 10:30" all treat it as a knob.
   - On the VGM14, **"EFX Return to MAIN" is a 60 mm fader** (10…∞ dB).
   - The only EFX **knobs** in the master section are **EFX Send** (0–10) and **EFX to MON** (0–10). Either re-express the dry/normal/wet settings as EFX Return fader dB, or relabel them as the EFX Send master in 0–10 numbers (9:00 = 2, 10:30 = 3.5, 12:00 = 5).
8. **Send knobs use clock positions instead of printed numbers.** Mon, Aux, EFX and the master knobs are printed **0–10**. Clock hour − 7 = printed number. For example, Vox MON 14.5 is "7.5", Bass MON 13 is "6", Gtr MON 10.5 is "3.5", and EFX 10.5 is "3.5". Zone "10 o'clock" is "3".
9. **Gain uses clock positions instead of printed dB.** The knob prints dB on two rings. Approximate readings:

   | Channel | App value | Clock | Printed dB (approx.) |
   |---|---|---|---|
   | Kick | 10.5 | 10:30 | about +20 mic |
   | Snare/toms | 11 | 11:00 | about +25 |
   | OH | 9 | 9:00 | about +8 |
   | Vox | 13 | 1:00 | about +38 |
   | Gtr1 | 8 | 8:00 | about −20 line |

   Also, the gain setting drives the **non-defeatable compressor** on channels 1–10, and the **Set Level LED** is the intended gain reference.
10. **Phantom is global.** The per-channel `phantom:true/false` field and the "48V" column suggest a per-channel switch. There is **one rear-panel 48 V switch**. The app's own text ("48V hits every XLR") is right, but the data model isn't.
11. **The console drawing leaves out controls** that exist on every strip:
    - the Set Level and Clip LEDs
    - the **Pan/Bal knob** (Pan is in `CH` but not drawn)
    - the Aux **Pre/Post switch** (drawn only as an "AUX SPARE" pill)
    - **Mute** + Clip/Mute LED and **Solo** + LED
    - the channel-number box
12. **Master label names.**
    - "Aux master" is printed **Aux Send** (knob).
    - "Zone level" is printed **Zone/Sub** (knob, 0–10). Its jack is on the **rear** panel.
    - The graphic EQ is printed **Equalizer** with an **Assign** switch that reads Main (up) or Mon (down). The app has this right.
13. **"FX preset: short plate / small room"** has no exact preset. The nearest are **#6 Plate Reverb – Vocals**, **#5 Plate Reverb** and **#1 Room Reverb**, shortened with the **Modify** knob.
14. **Signal-flow items the app already has right:**
    - Mon is pre-fader and feeds Mon OUT.
    - EFX is post-fader into the internal FX.
    - Aux is pre/post switchable.
    - Zone is post-Main-fader and mono.
    - The graphic EQ serves Main or Mon, never both.
    - The drummer's wedge on Mon OUT and Aux as a spare pre-fader backup are both valid uses of this board.
    - Zone taken before or after the graphic EQ is still UNCONFIRMED (the app already flags this).
15. **Minor:** Bass note says "the one channel with no HPF", but Kick (ch 1) and Floor tom (ch 4) are also `hpf:false` in `CH`. This is internal to the app; the hardware has an HPF on every channel.
