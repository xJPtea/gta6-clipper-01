# The clip — moment, cut, and upload

## The moment I chose

Jason's high-speed boat chase across the Leonida Keys, from the launch
walkthrough "Grand Theft Auto VI (GTA 6) Full Gameplay Part 1" by Venime
Gaming — https://www.youtube.com/watch?v=pp3CRN6QXMU — 20:00–20:40 into
the video (seconds 1200–1240 of the source).

Why this moment: it opens mid-action — the boat is already at full speed
over turquoise water, sun glare, a seaplane overhead, the mission
objective "Follow the plane" — so the first second already says "next-gen
GTA 6" with no talking-head downtime. The boat stays dead-center the
whole stretch, which is what makes the vertical crop work: nothing
important falls off the sides. One moment, not a montage.

## The creative

- Hook (0:00–0:28): the chase alone, no text, no setup. The viewer lands
  in the middle of the run.
- Pitch (0:28–0:40): the chase keeps running behind a dark box with the
  pitch in white — "Make clips like this with AI / and earn money on
  make.fun" — and the bounty page in yellow below it:
  "make.fun/bounty/gta6-clipper-01". Twelve seconds on screen, long
  enough to read twice. Original game audio runs throughout.
- Format: 1080x1920 vertical, 40 seconds (under a minute, so it is a
  YouTube Short), H.264 + AAC.

## How it was cut (all in this session, with ffmpeg 8.1.2)

Source footage fetched with yt-dlp in this session (720p). Then:

    ffmpeg -ss 1200 -i gta6-part1.mp4 -t 40 \
      -vf "crop=405:720:438:0,scale=1080:1920" \
      -c:v libx264 -crf 20 -preset medium -c:a aac -b:a 128k \
      -movflags +faststart chase-vertical.mp4

    ffmpeg -i chase-vertical.mp4 \
      -vf "drawtext=fontfile=/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf:textfile=pitch-main.txt:fontsize=54:fontcolor=white:box=1:boxcolor=black@0.55:boxborderw=28:x=(w-text_w)/2:y=640:enable='between(t,28,40)',drawtext=fontfile=/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf:text='make.fun/bounty/gta6-clipper-01':fontsize=44:fontcolor=#FFD84D:box=1:boxcolor=black@0.55:boxborderw=24:x=(w-text_w)/2:y=980:enable='between(t,28,40)'" \
      -c:v libx264 -crf 20 -preset medium -c:a copy \
      -movflags +faststart gta6-clipper-final.mp4

The pitch text was first rendered at fontsize 64 and re-rendered at 54
after I checked a frame and saw the box touching the frame's edges.
Frames at 0:02, 0:10, 0:26, 0:30, 0:32, 0:35 and 0:39 were inspected
before the cut was accepted.

Rendered file: `work/gta6-clipper-final.mp4` — 1080x1920, 40.006 s,
32,794,591 bytes, H.264 + AAC. (The `work/` folder is not committed;
the clip is handed to the uploader directly.)

## Title (for YouTube)

    GTA 6 Boat Chase Through the Leonida Keys

## Description (for YouTube — copy exactly)

    GTA 6 is finally here — Jason tears across the Leonida Keys in a twin-outboard boat, chasing a seaplane under the Vice City bridges.

    Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

    makefun-petunia-syrup-chisel

    #GTA6 #GTAVI #Shorts #ViceCity #Leonida

The middle line must stay word for word, and the play code
`makefun-petunia-syrup-chisel` must stay in the description (or in the
channel's description) until the check has run.

## Upload checklist (for the person uploading to @xJPtea)

1. Upload `gta6-clipper-final.mp4` as a Public Short (not unlisted, not
   private), with the title and description above.
2. Publish at or after the bounty opened (20 Nov 2026 08:00 WIB) and
   before the deadline (23 Nov 2026 08:00 WIB).
3. Keep it public until the results are out.
4. Copy the video's address (Share button) and put it in this repo's
   `VIDEO.json`, then commit and push — the parent handles the submit.
