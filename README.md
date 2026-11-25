# Classic Grey Theme

A mid-grey theme for [Safelight](https://github.com/anthonyreimche/SafeLight). Neutral accent, no brand colours.

## Install

In Safelight, go to **View ▸ Extensions** and enter:

```
OPGERUIMD97/safelight-classic-grey
```

Then apply it via **View ▸ Theme**. No build step; `index.js` is the bundle.

## Palette

| Role | Hex | Safelight token |
| --- | --- | --- |
| Canvas | `#5f5f5f` | `--color-surface-0` |
| Panels | `#505050` | `--color-surface-1` |
| Panel headers | `#323232` | `--color-surface-2` |
| Selected | `#686868` | `--color-surface-3` |
| Hover | `#767676` | `--color-surface-4` |
| Borders | `#000000` | `--color-border` |
| Subtle borders | `#2c2c2c` | `--color-border-subtle` |
| Body text | `#ffffff` | `--color-text-primary` |
| Labels | `#d2d2d2` | `--color-text-secondary` |
| Placeholder | `#a6a6a6` | `--color-text-muted` |
| Accent | `#e4e4e4` | `--color-accent` |
| Accent hover | `#ffffff` | `--color-accent-hover` |
| Slider fill | `#d4d4d4` | `--color-slider-fill` |
| Text on accent | `#1a1a1a` | `--color-on-accent` |
| Develop surround | `#929292` | `--color-canvas-surround` |

## Notes

- The top bar, the panel rails and the Library toolbar share `--color-surface-1`, so they are `#505050`.
- Outer borders are `#000000`.
- `--font-mono` is left unset, so **Preferences ▸ Interface ▸ Interface font** keeps working (in Safelight 3.x that variable is the interface font).
- Lighter than Graphite (`#242424`–`#3a3a3a`).
- Stars, flags and colour labels keep their own colours. The accent itself is grey.

## Changelog

### 1.0.2

- The description matches the README.

### 1.0.1

- The name in the theme list is Classic Grey Theme. The README uses the same sections as the other themes.

### 1.0.0

- First release.

## License

MIT
