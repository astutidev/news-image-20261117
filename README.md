# The World in One Day — Tuesday 17 November 2026

[![make.fun bounty](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/axiesc/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/axiesc/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117)

A one-image newspaper for the make.fun bounty
[“Sum up 17 November's world news in one image”](https://make.fun/bounty/news-image-20261117):
a single 1024×1024 front page that sums up the world's news of
**Tuesday 17 November 2026**.

The page leads with Ukraine's 1,300-drone barrage on the Kerch Bridge, the
US strike on Iran's Qeshm Island, and the first-ever Xi–Trump–Putin
trilateral summit, then covers 40 stories across six continents — war,
diplomacy, markets, a 178-site cyberattack, the COP31 draft, a failed
rocket, and the day's sport — with a dotted world map and the day in four
figures.

## How it is built

- `page.html` — the front page itself, authored as one HTML document
  (inline SVG illustrations and a dotted world map drawn from data).
- `render.mjs` — build tool that renders `page.html` to `entry.png`
  (1024×1024) with headless Chromium.
- `entry.png` — the rendered image the entry ships.
- `main.ts` — the entry program: it copies `entry.png` to the output
  directory (`/output/entry.png`, or `$MAKEFUN_OUTPUT_DIR`). It needs no
  network and writes the same bytes on every run.

Run it the way the bounty does:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
