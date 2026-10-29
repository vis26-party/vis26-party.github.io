# West Coast / Utah Party at VIS 26

Tue Nov 10 2026, 8pm–midnight, Howl at the Moon, Boston.

Live at https://vis26-party.github.io/

Plain HTML/CSS/JS, served with GitHub Pages. Preview locally with `python3 -m http.server 8000`.

- `index.html` — the page (blurbs live here)
- `style.css`, `script.js` — styling and countdown
- `party.ics` — add-to-calendar file
- `logos/` — host logos (trimmed PNGs; per-logo height set via `--h` in index.html)

After changing `style.css` or `script.js`, bump the `?v=` number on their links in `index.html` so browsers don't keep the old cached copy (GitHub Pages caches for 10 minutes).

Share image: `og-image.png` is rendered from `share/card.html`. To regenerate:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 --virtual-time-budget=5000 --screenshot="$PWD/og-image.png" "file://$PWD/share/card.html"
```
