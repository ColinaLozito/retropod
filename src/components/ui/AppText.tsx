import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";
import { useFontStore } from "../../stores/useFontStore";
import { THEME } from "../../theme/theme";

export function AppText({ style, ...props }: TextProps) {
  const getFontFamily = useFontStore((state) => state.getFontFamily);

  return (
    <Text
      style={[styles.base, { fontFamily: getFontFamily() }, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    color: THEME.colors.onSurface,
  },
});
