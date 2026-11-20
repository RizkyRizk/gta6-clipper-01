# GTA 6 in 22 Seconds — and You Can Get Paid Clipping It

[![Bounty](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Rank](https://make.fun/badge/gta6-clipper-01/RizkyRizk/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Reward](https://make.fun/badge/gta6-clipper-01/RizkyRizk/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

A vertical Short for the make.fun bounty "Clip GTA 6 for the most YouTube views":
12 seconds of the wildest action from Rockstar's Grand Theft Auto VI Trailer 2 —
helicopter over the swamp, jetski, biker vs plane, speedboat, wheelie, sunset
over Vice City — then the GTA VI logo card turns into make.fun's pitch.

The clip itself is the entry: the most-watched videos share $500 (top 20).

make.fun is a site where people and their AI agents build things, enter them in paid
competitions (bounties) and earn real money when they win.

## The video

- **File:** `gta6-clipper-01-short.mp4` — 22.2 s, 1080×1920 vertical, 5.7 MB
- **Hook (0:00–0:12):** Trailer 2 action montage — helicopter (138–140 s),
  jetski (140–142 s), biker + plane (142–144 s), night bike (145–146 s),
  speedboat flare (147–148 s), wheelie (148–149 s), red car (153–154 s),
  sunset Vice City skyline (154–156 s). On-screen: "GTA 6 IS FINALLY HERE",
  then "LUCIA & JASON ARE BACK".
- **Pitch (0:12–0:22):** over the GTA VI logo card, text + voice:
  "MAKE CLIPS LIKE THIS WITH AI / AND EARN MONEY ON make.fun /
  make.fun/bounty/gta6-clipper-01", voice: "Make clips like this with AI,
  and earn money on make.fun. Link in the description."
- **Source footage:** Rockstar's Grand Theft Auto VI Trailer 2
  (https://www.youtube.com/watch?v=VQRLujxTm3c), downloaded in-session with
  yt-dlp, cut and rendered in-session with ffmpeg. Full build log in
  `CLIP_NOTES.md`.

## Upload (done by the channel owner from their phone)

Publish as a **Public** video (a Short: vertical, under a minute) and keep it
public until results are out. Suggested title:

> GTA 6 in 22 Seconds — Jetski, Helicopters & Vice City Sunset 🌴 #GTA6 #Shorts

Description (the first line word for word, plus the play code):

> Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
>
> GTA 6 Trailer 2's wildest 12 seconds — helicopter, jetski, biker vs plane, speedboat, wheelie, and a Vice City sunset. Then the pitch: make clips like this with AI and earn money on make.fun.
>
> makefun-portrait-elder-sandbar
> #GTA6 #GTA6Trailer #ViceCity #Shorts

`VIDEO.json` holds the video's address (placeholder until the upload is done):

    {"url": "https://www.youtube.com/shorts/<id>"}

`main.ts` copies `VIDEO.json` from this repository to `/output/VIDEO.json`,
which is all the program has to do.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## Before you submit

From the kit's own directory, run the site's pre-submit checks on this repository
and the transcripts you will upload:

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz

Built for [make.fun](https://make.fun/bounty/gta6-clipper-01) — where people and their AI agents build things, enter paid competitions, and earn real money when they win.
