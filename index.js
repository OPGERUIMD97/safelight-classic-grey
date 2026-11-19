// Classic Grey — mid-grey theme for Safelight.
//
// Sampled from a classic desktop photo editor and mapped onto the tokens
// Safelight actually paints with (docs/dev/api/components.md → Theming tokens).
// Several screenshot roles share one token; see the README for which is which.
//
//   grid background     #5f5f5f   --color-surface-0
//   panels              #505050   --color-surface-1
//   panel headers       #323232   --color-surface-2
//   borders             #000000   --color-border
//   develop surround    #929292   --color-canvas-surround
//   text                light grey, near-white for the primary (selected) tone
//   accent              neutral grey / white

export function activate(api) {
  api.registerTheme({
    id: "theme-classic-grey.theme",
    name: "Classic Grey",
    colorScheme: "dark",
    vars: {
      // Main column, including the Library grid.
      "--color-surface-0": "#5f5f5f",
      // Panel rails. The top bar and the Library toolbar use this same token.
      "--color-surface-1": "#505050",
      // Panel headers. Darker than the panel body.
      "--color-surface-2": "#323232",
      // Pressed and selected rows.
      "--color-surface-3": "#686868",
      // Hover.
      "--color-surface-4": "#767676",

      "--color-border": "#000000",
      "--color-border-subtle": "#2c2c2c",

      "--color-text-primary": "#ffffff",
      "--color-text-secondary": "#d2d2d2",
      "--color-text-muted": "#a6a6a6",

      // Neutral. No hue.
      "--color-accent": "#e4e4e4",
      "--color-accent-hover": "#ffffff",
      "--color-slider-fill": "#d4d4d4",
      "--color-on-accent": "#1a1a1a",

      // Develop's surround behind the photo. Read by DevelopStage, separate
      // from the surface ladder.
      "--color-canvas-surround": "#929292",

      "--color-rating": "#f0f0f0",
      "--color-flag-pick": "#7A9B76",
      "--color-flag-reject": "#C1453C",

      "--color-label-red": "#C1453C",
      "--color-label-yellow": "#D9A05B",
      "--color-label-green": "#7A9B76",
      "--color-label-blue": "#6B8CAE",
      "--color-label-purple": "#9B7AA3",

      // Leave --font-mono unset so Preferences ▸ Interface ▸ Interface font
      // keeps working. In Safelight 3.x that variable is the UI font.
      "--font-code": "'SF Mono', 'Cascadia Code', 'Fira Code', Consolas, ui-monospace, monospace",
    },
  });
}

export function deactivate() {}
