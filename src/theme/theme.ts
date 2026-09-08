// MonoPod Design System — E-Ink / Paper-Sim Aesthetic
// Monochrome grayscale palette inspired by vintage iPod & E-ink displays

export const THEME = {
  colors: {
    // Material Design 3 — Monochrome Surface System
    primary: '#000000',
    onPrimary: '#ffffff',
    primaryContainer: '#1c1b1b',
    onPrimaryContainer: '#858383',
    inversePrimary: '#c8c6c5',

    secondary: '#5f5e5e',
    onSecondary: '#ffffff',
    secondaryContainer: '#e4e2e1',
    onSecondaryContainer: '#656464',

    tertiary: '#000000',
    onTertiary: '#ffffff',
    tertiaryContainer: '#1a1c1a',
    onTertiaryContainer: '#838482',

    error: '#ba1a1a',
    onError: '#ffffff',
    errorContainer: '#ffdad6',
    onErrorContainer: '#93000a',

    // Surface hierarchy — paper & ink tones
    surface: '#f9f9f7',
    onSurface: '#1a1c1b',
    onSurfaceVariant: '#444748',
    surfaceVariant: '#e2e3e1',

    surfaceDim: '#dadad8',
    surfaceBright: '#f9f9f7',
    surfaceTint: '#5f5e5e',

    surfaceContainerLowest: '#ffffff',
    surfaceContainerLow: '#f4f4f2',
    surfaceContainer: '#eeeeec',
    surfaceContainerHigh: '#e8e8e6',
    surfaceContainerHighest: '#e2e3e1',

    inverseSurface: '#2f3130',
    inverseOnSurface: '#f1f1ef',

    outline: '#747878',
    outlineVariant: '#c4c7c7',

    // Fixed-tone primaries for component fills
    primaryFixed: '#e5e2e1',
    primaryFixedDim: '#c8c6c5',
    onPrimaryFixed: '#1c1b1b',
    onPrimaryFixedVariant: '#474646',

    secondaryFixed: '#e4e2e1',
    secondaryFixedDim: '#c8c6c5',
    onSecondaryFixed: '#1b1c1c',
    onSecondaryFixedVariant: '#474746',

    tertiaryFixed: '#e3e3e0',
    tertiaryFixedDim: '#c6c7c4',
    onTertiaryFixed: '#1a1c1a',
    onTertiaryFixedVariant: '#464745',

    // Convenience aliases
    background: '#f9f9f7',
    onBackground: '#1a1c1b',

    textInverse: '#ffffff',
    border: '#c4c7c7',
    borderSubtle: '#e2e3e1',
  },

  fonts: {
    // Serif — Newsreader (headlines, body)
    regular: 'System',
    medium: 'System',
    bold: 'System',
    sizes: {
      xs: 10,
      sm: 12,
      md: 14,
      lg: 16,
      xl: 20,
      xxl: 24,
      headline: 32,
      displayTime: 48,
    },
    // Label / monospace — Courier Prime
    // labelSm: 10px, labelMd: 12px
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    // Stitch tokens
    gutterSm: 8,
    gutterMd: 16,
    gutterLg: 24,
    marginPage: 20,
  },

  borderRadius: {
    // Stitch uses sharp 0px corners (brutalist E-ink)
    none: 0,
    xs: 2,
    sm: 4,
    md: 8,
    lg: 12,
    full: 9999,
  },

  // Keep legacy glass for backward compat
  glass: {
    blurIntensity: 20,
    gradientColors: {
      primary: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.05)'],
      secondary: ['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.05)'],
      card: ['rgba(255, 255, 255, 0.15)', 'rgba(255, 255, 255, 0.05)'],
    },
  },
};