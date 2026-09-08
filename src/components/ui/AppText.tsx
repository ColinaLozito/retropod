import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";
import { THEME } from "../../theme/theme";

export function AppText({ style, ...props }: TextProps) {
  return <Text style={[styles.base, style]} {...props} />;
}

const styles = StyleSheet.create({
  base: {
    color: THEME.colors.onSurface,
  },
});
