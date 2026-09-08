import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";
import { useFontStore, FONT_MAP, FONT_MAP_BOLD } from "../../stores/useFontStore";
import { useSettingsStore } from "../../stores/useSettingsStore";
import { THEME } from "../../theme/theme";

export function AppText({ style, ...props }: TextProps) {
  const selectedFont = useFontStore((s) => s.selectedFont);
  const fontStyle = useSettingsStore((s) => s.fontStyle);

  const isBold = fontStyle === "negrita";
  const fontMap = isBold ? FONT_MAP_BOLD : FONT_MAP;
  const fontFamily = fontMap[selectedFont];

  return (
    <Text
      style={[
        styles.base,
        { fontFamily },
        isBold && styles.bold,
        style,
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    color: THEME.colors.onSurface,
  },
  bold: {
    // Faux-bold for fonts without a bold variant (IndieFlower, Shadows)
    textShadowOffset: { width: 0.5, height: 0 },
    textShadowRadius: 0.5,
    textShadowColor: THEME.colors.onSurface,
  },
});
