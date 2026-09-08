import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { THEME } from "../../theme/theme";

interface LcdScreenFrameProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function LcdScreenFrame({ children, style }: LcdScreenFrameProps) {
  return (
    <View style={[styles.frame, style]}>
      <View style={styles.dotOverlay} />
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    borderWidth: 1,
    borderColor: THEME.colors.outlineVariant,
    borderRadius: 12,
    backgroundColor: THEME.colors.surfaceContainerLow,
    padding: 12,
    overflow: "hidden",
  },
  dotOverlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.15,
    // Dot grid pattern — in RN we approximate with a subtle repeating background
    backgroundColor: THEME.colors.onSurface,
  },
  content: {
    zIndex: 1,
  },
});
