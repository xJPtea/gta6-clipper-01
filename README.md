# GTA 6 Boat Chase — make.fun clipper entry

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/xJPtea/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/xJPtea/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Entry for the make.fun bounty "Clip GTA 6 for the most YouTube views"
($500, top 20 share the pot, places by YouTube views at the deadline).

## The clip

A 40-second vertical Short (1080x1920): Jason's high-speed boat chase
across the turquoise water of the Leonida Keys in Grand Theft Auto VI —
twin-outboard boat at full speed, sun glare, a seaplane overhead, bridges
ahead. It opens mid-chase, no setup, and at 0:28 it turns to the viewer
with make.fun's pitch on screen: "Make clips like this with AI and earn
money on make.fun" + "make.fun/bounty/gta6-clipper-01".

The full story of the moment, the source footage, the cut and the upload
checklist are in [CLIP.md](CLIP.md).

## The video

`VIDEO.json` holds the uploaded video's address. It is filled in after the
clip goes up on YouTube as a public Short; until then it carries the
starter placeholder. `main.ts` (Node 22, standard library only) copies
`VIDEO.json` to `/output/VIDEO.json`, where the house reads it and counts
the video's views through the YouTube Data API.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

Check the program's two runs agree with `node test.mjs`.
