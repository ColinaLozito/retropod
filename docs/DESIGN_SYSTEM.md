# MonoPod Design System

E-Ink / Paper-Sim aesthetic. Monochrome grayscale palette inspired by vintage iPod hardware and electronic ink displays.

## Philosophy

- **Distraction-free** — zero color, pure typography hierarchy
- **Tactile** — physical button press effects, mechanical scrubber, click wheel
- **Nostalgic** — Courier Prime labels, Newsreader serif body, vinyl record visuals
- **Sharp** — 0px default radius, brutalist grid, 1px borders

---

## Color Palette

All colors are grayscale. The system follows Material Design 3 token naming.

### Surface Hierarchy (lightest → darkest)

| Token | Hex | Usage |
|-------|-----|-------|
| `surfaceContainerLowest` | `#ffffff` | Deepest background |
| `surface` / `surfaceBright` | `#f9f9f7` | Primary canvas (paper) |
| `surfaceContainerLow` | `#f4f4f2` | Cards, settings panels |
| `surfaceContainer` | `#eeeeec` | Subtle containers |
| `surfaceContainerHigh` | `#e8e8e6` | Inactive chips, hover states |
| `surfaceContainerHighest` | `#e2e3e1` | Active outlines, toggles off |
| `surfaceDim` | `#dadad8` | Disabled states |

### Text / Ink

| Token | Hex | Usage |
|-------|-----|-------|
| `onSurface` | `#1a1c1b` | Primary text, headlines |
| `onSurfaceVariant` | `#444748` | Secondary text, subtitles |
| `outline` | `#747878` | Tertiary text, placeholders |
| `outlineVariant` | `#c4c7c7` | Borders, dividers, toggle tracks |

### Primary (Ink Black)

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#000000` | Active states, filled buttons, selected tabs |
| `onPrimary` | `#ffffff` | Text on primary fills |
| `primaryContainer` | `#1c1b1b` | Click wheel ring |
| `onPrimaryContainer` | `#858383` | Subtle text on containers |

### Secondary (Charcoal)

| Token | Hex | Usage |
|-------|-----|-------|
| `secondary` | `#5f5e5e` | Subtle fills, surface tint |
| `onSecondary` | `#ffffff` | Text on secondary fills |
| `secondaryContainer` | `#e4e2e1` | Card backgrounds |
| `onSecondaryContainer` | `#656464` | Labels on containers |

### Inverse (Dark Mode / Modal)

| Token | Hex | Usage |
|-------|-----|-------|
| `inverseSurface` | `#2f3130` | Dark backgrounds |
| `inverseOnSurface` | `#f1f1ef` | Light text on dark |
| `inversePrimary` | `#c8c6c5` | Accent on dark |

### Error

| Token | Hex | Usage |
|-------|-----|-------|
| `error` | `#ba1a1a` | Destructive actions |
| `onError` | `#ffffff` | Text on error |
| `errorContainer` | `#ffdad6` | Error backgrounds |

---

## Typography

Two font families create the editorial + mechanical duality:

### Newsreader (Serif) — Headlines & Body

| Token | Size | Weight | Line Height | Letter Spacing |
|-------|------|--------|-------------|----------------|
| `headline` | 32px | 600 | 40px | -0.02em |
| `xxl` | 24px | 600 | 32px | -0.01em |
| `xl` | 20px | 500 | 28px | — |
| `lg` | 16px | 400 | 24px | — |
| `md` | 14px | 400 | 20px | — |
| `sm` | 12px | 400 | 16px | — |
| `xs` | 10px | 400 | 14px | 0.08em |

### Courier Prime (Monospace) — Labels & Time Display

| Token | Size | Weight | Line Height | Letter Spacing |
|-------|------|--------|-------------|----------------|
| `displayTime` | 48px | 700 | 48px | -0.03em |
| `labelMd` | 12px | 400 | 16px | 0.05em |
| `labelSm` | 10px | 400 | 14px | 0.08em |

---

## Spacing

8px grid system with Stitch design tokens:

| Token | Value |
|-------|-------|
| `xs` | 4px |
| `sm` / `gutterSm` | 8px |
| `md` / `gutterMd` | 16px |
| `marginPage` | 20px |
| `lg` / `gutterLg` | 24px |
| `xl` | 32px |
| `xxl` | 48px |

---

## Border Radius

Default is sharp (0px). Radius used sparingly for cards and badges:

| Token | Value | Usage |
|-------|-------|-------|
| `none` | 0px | Buttons, list items (default) |
| `xs` | 2px | Micro adjustments |
| `sm` | 4px | Badges, small elements |
| `md` | 8px | Album art, cards |
| `lg` | 12px | Settings cards, hint bars |
| `full` | 9999px | Filter chips (rounded variant), avatars |

---

## Component Library

### Shared Primitives

| Component | File | Description |
|-----------|------|-------------|
| `Button` | `shared/Button.tsx` | Radio-style option button (filled/outlined) |
| `Toggle` | `shared/Toggle.tsx` | iOS-style on/off switch |
| `FilterChip` | `shared/FilterChip.tsx` | Tab filter pill (square/rounded variants) |
| `ListItem` | `shared/ListItem.tsx` | Reusable row with thumbnail, text, meta, chevron |
| `SectionHeader` | `shared/SectionHeader.tsx` | Title + count label row |

### App Chrome

| Component | File | Description |
|-----------|------|-------------|
| `HeaderBar` | `shared/HeaderBar.tsx` | Fixed top bar — logo + avatar |
| `BottomNavBar` | `shared/BottomNavBar.tsx` | 4-tab bottom navigation |

### Player

| Component | File | Description |
|-----------|------|-------------|
| `LcdScreenFrame` | `player/LcdScreenFrame.tsx` | Bordered LCD panel with dot-grid overlay |
| `NowPlayingInfo` | `player/NowPlayingInfo.tsx` | Track #, title, artist + album |
| `VinylArtwork` | `player/VinylArtwork.tsx` | Concentric circle vinyl record visual |
| `TimelineScrubber` | `player/TimelineScrubber.tsx` | Progress bar + time labels + tick marks |
| `ClickWheel` | `player/ClickWheel.tsx` | iPod-style 5-zone controller |

### Library

| Component | File | Description |
|-----------|------|-------------|
| `SearchBar` | `library/SearchBar.tsx` | Sticky input with search + mic icons |
| `FilterChips` | `library/FilterChips.tsx` | Horizontal scroll filter tabs |
| `AlbumListItem` | `library/AlbumListItem.tsx` | Square thumbnail row |
| `ArtistListItem` | `library/ArtistListItem.tsx` | Circular avatar row |
| `PlaylistListItem` | `library/PlaylistListItem.tsx` | Icon square row |
| `OfflineSavedItem` | `library/OfflineSavedItem.tsx` | Saved item with sync check |

### Coverflow

| Component | File | Description |
|-----------|------|-------------|
| `CoverflowHeader` | `coverflow/CoverflowHeader.tsx` | Archive label + title + count |
| `CoverflowChips` | `coverflow/CoverflowChips.tsx` | Rounded genre filter pills |
| `CoverGrid` | `coverflow/CoverGrid.tsx` | 2-column responsive grid |
| `AlbumCoverCard` | `coverflow/AlbumCoverCard.tsx` | Art + halftone + volume badge |
| `BottomHintBar` | `coverflow/BottomHintBar.tsx` | Hint text with icon |

### Settings

| Component | File | Description |
|-----------|------|-------------|
| `SettingsCard` | `settings/SettingsCard.tsx` | Reusable card shell with icon + badge |
| `EInkDisplayCard` | `settings/EInkDisplayCard.tsx` | Texture, dark mode, font style |
| `AudioEngineCard` | `settings/AudioEngineCard.tsx` | FLAC, crossfade, EQ presets |
| `AboutCard` | `settings/AboutCard.tsx` | App description + build fingerprint |

### UI (Legacy)

| Component | File | Description |
|-----------|------|-------------|
| `AppText` | `ui/AppText.tsx` | Base text wrapper |
| `Toast` | `ui/Toast.tsx` | Animated notification |
| `LoadingOverlay` | `ui/LoadingOverlay.tsx` | Full-screen loader |
| `ErrorBoundary` | `ErrorBoundary.tsx` | Crash fallback UI |

---

## File Structure

```
src/
├── theme/
│   └── theme.ts              # Design tokens (colors, fonts, spacing, radius)
├── components/
│   ├── shared/               # Primitives + chrome
│   │   ├── Button.tsx
│   │   ├── Toggle.tsx
│   │   ├── FilterChip.tsx
│   │   ├── ListItem.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── HeaderBar.tsx
│   │   └── BottomNavBar.tsx
│   ├── player/               # Now Playing screen
│   │   ├── LcdScreenFrame.tsx
│   │   ├── NowPlayingInfo.tsx
│   │   ├── VinylArtwork.tsx
│   │   ├── TimelineScrubber.tsx
│   │   └── ClickWheel.tsx
│   ├── library/              # Browse screen
│   │   ├── SearchBar.tsx
│   │   ├── FilterChips.tsx
│   │   ├── AlbumListItem.tsx
│   │   ├── ArtistListItem.tsx
│   │   ├── PlaylistListItem.tsx
│   │   └── OfflineSavedItem.tsx
│   ├── coverflow/            # Catalog grid
│   │   ├── CoverflowHeader.tsx
│   │   ├── CoverflowChips.tsx
│   │   ├── CoverGrid.tsx
│   │   ├── AlbumCoverCard.tsx
│   │   └── BottomHintBar.tsx
│   ├── settings/             # Preferences
│   │   ├── SettingsCard.tsx
│   │   ├── EInkDisplayCard.tsx
│   │   ├── AudioEngineCard.tsx
│   │   ├── AboutCard.tsx
│   │   └── FontSelector.tsx
│   └── ui/                   # Legacy utilities
│       ├── AppText.tsx
│       ├── Toast.tsx
│       ├── Toast.styles.tsx
│       ├── LoadingOverlay.tsx
│       └── LoadingOverlay.styles.tsx
```
