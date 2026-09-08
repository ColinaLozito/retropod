# Fonts & Font Switcher

RetroPod supports dynamic font switching across the app, configurable from the Settings screen. Three informal/script Google Fonts are bundled via Expo's official font packages.

## Available Fonts

| ID | Font Family | Package | Google Fonts Link |
|----|-------------|---------|-------------------|
| `indie` | Indie Flower | `@expo-google-fonts/indie-flower` | [Indie Flower](https://fonts.google.com/specimen/Indie+Flower) |
| `caveat` | Caveat | `@expo-google-fonts/caveat` | [Caveat](https://fonts.google.com/specimen/Caveat) |
| `shadows` | Shadows Into Light | `@expo-google-fonts/shadows-into-light` | [Shadows Into Light](https://fonts.google.com/specimen/Shadows+Into+Light) |

All three use the `400Regular` weight.

## Architecture

```
Layout loads fonts (useFonts)
        │
        ▼
AppText reads useFontStore.getFontFamily()
        │
        ▼
Every <AppText> renders with selected font
        │
        ▼
FontSelector lets user pick font
        │
        ▼
useFontStore persists to AsyncStorage
```

### Font Loading (`src/app/_layout.tsx`)

Fonts are loaded via `useFonts` from `expo-font` before any UI renders. If fonts aren't loaded and no error occurred, the layout returns `null` (blocks rendering).

```typescript
const [fontsLoaded, fontError] = useFonts({
  IndieFlower_400Regular,
  Caveat_400Regular,
  ShadowsIntoLight_400Regular,
});

if (!fontsLoaded && !fontError) {
  return null;
}
```

### Global Text Component (`src/components/ui/AppText.tsx`)

`AppText` is a thin wrapper around React Native `Text` that reads the selected font from the Zustand store and applies it as `fontFamily`. All screens should use `AppText` instead of raw `<Text>` to respect the user's font choice.

```typescript
export function AppText({ style, ...props }: TextProps) {
  const getFontFamily = useFontStore((state) => state.getFontFamily);

  return (
    <Text
      style={[styles.base, { fontFamily: getFontFamily() }, style]}
      {...props}
    />
  );
}
```

### Font Store (`src/stores/useFontStore.ts`)

Zustand store with AsyncStorage persistence. Stores the active font ID and provides `getFontFamily()` which maps the ID to the registered font name.

```typescript
export const FONT_MAP: Record<FontOption, string> = {
  indie: "IndieFlower_400Regular",
  caveat: "Caveat_400Regular",
  shadows: "ShadowsIntoLight_400Regular",
};
```

- `selectedFont`: Current font ID (`"indie"` | `"caveat"` | `"shadows"`)
- `setSelectedFont(font)`: Updates the active font
- `getFontFamily()`: Returns the registered font name string for React Native's `fontFamily`

### Font Selector (`src/components/settings/FontSelector.tsx`)

Segmented control rendered in the Settings screen. Each button renders its label in its own font (`FONT_MAP[option.id]`) so the user sees a live preview before selecting.

## Adding a New Font

1. Install the Expo font package:
   ```bash
   npx expo install @expo-google-fonts/<font-name>
   ```

2. Import the font in `src/app/_layout.tsx` and add it to `useFonts()`.

3. Add the entry to `FONT_MAP` in `src/stores/useFontStore.ts`:
   ```typescript
   export const FONT_MAP: Record<FontOption, string> = {
     // ...existing
     newfont: "NewFont_400Regular",
   };
   ```

4. Add the new `FontOption` to the union type:
   ```typescript
   export type FontOption = "indie" | "caveat" | "shadows" | "newfont";
   ```

5. Add the option to `FONT_OPTIONS` in `src/components/settings/FontSelector.tsx`.

## Dependencies

- `expo-font` — Font loading primitives
- `@expo-google-fonts/indie-flower` — Indie Flower font
- `@expo-google-fonts/caveat` — Caveat font
- `@expo-google-fonts/shadows-into-light` — Shadows Into Light font
- `zustand` — State management for font selection
- `@react-native-async-storage/async-storage` — Persistence backend
