# Classic Grey

A mid-grey theme for [Safelight](https://github.com/anthonyreimche/SafeLight). Neutral accent, no brand colours. Lighter than Graphite (`#242424`–`#3a3a3a`).

Install from the Extensions panel:

```
OPGERUIMD97/safelight-classic-grey
```

Apply via **View ▸ Theme**. No build step; `index.js` is the bundle.

## Palette

| Role in the reference | Hex | Safelight token |
| --- | --- | --- |
| Library grid background | `#5f5f5f` | `--color-surface-0` |
| Panels | `#505050` | `--color-surface-1` |
| Panel headers | `#323232` | `--color-surface-2` |
| Selected / pressed | `#686868` | `--color-surface-3` |
| Hover | `#767676` | `--color-surface-4` |
| Borders | `#000000` | `--color-border` |
| Hairline dividers | `#2c2c2c` | `--color-border-subtle` |
| Selected text | `#ffffff` | `--color-text-primary` |
| Labels | `#d2d2d2` | `--color-text-secondary` |
| Muted text | `#a6a6a6` | `--color-text-muted` |
| Accent | `#e4e4e4` | `--color-accent` |
| Accent hover | `#ffffff` | `--color-accent-hover` |
| Slider fill | `#d4d4d4` | `--color-slider-fill` |
| Text on accent | `#1a1a1a` | `--color-on-accent` |
| Develop surround, around the photo | `#929292` | `--color-canvas-surround` |

The top bar, the panel rails and the Library toolbar are all painted with `--color-surface-1`, so they share `#505050`. Safelight has no separate token for a black top bar or for the `#a0a0a0` filter bar. Outer borders are `#000000`.

`--font-mono` is left unset. In Safelight 3.x that variable is the interface font, and setting it would override **Preferences ▸ Interface ▸ Interface font**.

Stars, flags and colour labels keep their own colours so picks, rejects and labels stay readable. The accent itself is grey.

## License

MIT
