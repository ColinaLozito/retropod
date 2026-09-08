import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { AppText } from "../ui/AppText";
import { THEME } from "../../theme/theme";

interface SectionHeaderProps {
  title: string;
  count?: string;
  style?: ViewStyle;
}

export function SectionHeader({ title, count, style }: SectionHeaderProps) {
  return (
    <View style={[styles.container, style]}>
      <AppText style={styles.title}>{title}</AppText>
      {count ? <AppText style={styles.count}>{count}</AppText> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 8,
    marginBottom: 4,
  },
  title: {
    fontSize: THEME.fonts.sizes.xl,
    fontWeight: "600",
    color: THEME.colors.onSurface,
    textTransform: "uppercase",
    letterSpacing: -0.01,
  },
  count: {
    fontSize: THEME.fonts.sizes.sm,
    color: THEME.colors.onSurfaceVariant,
    textTransform: "uppercase",
  },
});
