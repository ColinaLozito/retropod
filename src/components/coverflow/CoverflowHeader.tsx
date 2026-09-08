import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { AppText } from "../ui/AppText";
import { THEME } from "../../theme/theme";

interface CoverflowHeaderProps {
  archiveLabel?: string;
  title: string;
  volumeCount: string;
  style?: ViewStyle;
}

export function CoverflowHeader({
  archiveLabel = "Archive 04",
  title,
  volumeCount,
  style,
}: CoverflowHeaderProps) {
  return (
    <View style={[styles.container, style]}>
      <View>
        <AppText style={styles.archiveLabel}>{archiveLabel}</AppText>
        <AppText style={styles.title}>{title}</AppText>
      </View>
      <AppText style={styles.volumeCount}>{volumeCount}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingTop: 8,
  },
  archiveLabel: {
    fontSize: THEME.fonts.sizes.sm,
    textTransform: "uppercase",
    letterSpacing: 0.08,
    color: THEME.colors.onSurfaceVariant,
  },
  title: {
    fontSize: THEME.fonts.sizes.xxl,
    fontWeight: "600",
    color: THEME.colors.onSurface,
    marginTop: 4,
  },
  volumeCount: {
    fontSize: THEME.fonts.sizes.sm,
    color: THEME.colors.onSurfaceVariant,
    textTransform: "uppercase",
  },
});
