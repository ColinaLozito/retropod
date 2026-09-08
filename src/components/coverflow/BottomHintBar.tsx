import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { AppText } from "../ui/AppText";
import { THEME } from "../../theme/theme";

interface BottomHintBarProps {
  text?: string;
  style?: ViewStyle;
}

export function BottomHintBar({
  text = "Tap any volume to load into the tactile player.",
  style,
}: BottomHintBarProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.left}>
        <AppText style={styles.icon}>auto_stories</AppText>
        <AppText style={styles.text}>{text}</AppText>
      </View>
      <AppText style={styles.arrow}>↗</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: THEME.colors.surfaceContainerLow,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 12,
  },
  icon: {
    fontSize: 18,
    color: THEME.colors.onSurface,
  },
  text: {
    fontSize: THEME.fonts.sizes.md,
    color: THEME.colors.onSurfaceVariant,
    flex: 1,
  },
  arrow: {
    fontSize: 16,
    color: THEME.colors.onSurfaceVariant,
    marginLeft: 12,
  },
});
