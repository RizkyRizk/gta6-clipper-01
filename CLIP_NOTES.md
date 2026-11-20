# gta6-clipper-01 — build notes (all steps run in this session)

## Source footage

- Rockstar's Grand Theft Auto VI Trailer 2, https://www.youtube.com/watch?v=VQRLujxTm3c
- Downloaded in-session: `yt-dlp` 2026.10.26 (binary from GitHub releases) —
  first attempt with the default client timed out on YouTube reads; retry with
  `--extractor-args "youtube:player_client=android"` worked. Only format 18
  (640x360, 30 fps, 166.7 s, 8.49 MiB) was available (YouTube SABR experiment
  blocks higher formats for this client); iOS client returned no video formats.
- File: `/tmp/gta6-trailer2.mp4` (kept out of the repo; the rendered clip is in
  the repo as `gta6-clipper-01-short.mp4`).

## Moment chosen (decided in-session after inspecting frames)

Trailer 2 is mostly slow dialogue scenes. The final action montage
(138–156 s) is the only stretch of pure spectacle, so the hook is a rapid
1–2 s cut montage of it: helicopter over the swamp, jetski duo, biker
flying past a plane, night bike chase, speedboat sun flare, motorcycle
wheelie, red car speeding, sunset skyline over Vice City. The trailer's
own VI logo end card (156.5–166.7 s) is the natural pitch background.

## Voice

- Pitch voiceover synthesized in-session with `/opt/hatch/bin/tts`
  (Meta Shortwave, voice avocado_v2:MAI_03), 5.2 s, `/tmp/voice.mp3`:
  "Make clips like this with AI, and earn money on make.fun. Link in the
  description."

## Render (one ffmpeg command, filter script at /tmp/render.filter)

- 9 video trims from the trailer (138–140, 140–142, 142–144, 145–146,
  147–148, 148–149, 153–154, 154–156, 156.5–166.7) + matching audio trims,
  concatenated; logo-card audio ducked to 0.30 under the voiceover, voice
  delayed to 12.3 s and mixed in.
- Vertical 1080x1920: blurred + darkened fill background, 1080x608
  foreground centred (y=656).
- drawtext (DejaVuSans-Bold): "GTA 6 IS FINALLY HERE" (0–6 s),
  "LUCIA & JASON ARE BACK" (6–12 s) at y=170; pitch lines at y=1380/1470/1560
  (12–22.2 s): "MAKE CLIPS LIKE THIS WITH AI", "AND EARN MONEY ON make.fun",
  "make.fun/bounty/gta6-clipper-01" (yellow).
- Command:
  `ffmpeg -y -v error -i gta6-trailer2.mp4 -i voice.mp3 -filter_complex_script render.filter -map "[vout]" -map "[aout]" -c:v libx264 -crf 22 -preset medium -pix_fmt yuv420p -r 30 -c:a aac -b:a 128k -movflags +faststart gta6-clipper-01-short.mp4`

## Self-check (in-session)

- `ffprobe`: 22.2 s, 1080x1920, h264 + aac, 5,727,625 bytes.
- Frames extracted at t=1, 8, 15, 21 s and viewed: hook text visible over
  helicopter (t=1) and speedboat (t=8); pitch text + yellow bounty URL
  visible over the VI logo (t=15) and Rockstar logo (t=21); nothing cut off,
  text clear of the frame edges.
- Audio `volumedetect`: mean -19.0 dB, max -5.0 dB (trailer music + voice).
- `main.ts` run: `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
  — out/VIDEO.json byte-identical to VIDEO.json.
- VIDEO.json still holds the placeholder URL — replaced with the real
  YouTube Shorts URL after the owner uploads from their phone. No push,
  no check, no submit run from this session (parent's step).
