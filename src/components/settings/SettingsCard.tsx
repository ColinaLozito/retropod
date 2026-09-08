import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { AppText } from "../ui/AppText";
import { THEME } from "../../theme/theme";

interface SettingsCardProps {
  icon: string;
  title: string;
  badge?: string;
  children: React.ReactNode;
  style?: ViewStyle;
}

export function SettingsCard({
  icon,
  title,
  badge,
  children,
  style,
}: SettingsCardProps) {
  return (
    <View style={[styles.card, style]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <AppText style={styles.icon}>{icon}</AppText>
          <AppText style={styles.title}>{title}</AppText>
        </View>
        {badge ? (
          <View style={styles.badge}>
            <AppText style={styles.badgeText}>{badge}</AppText>
          </View>
        ) : null}
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: THEME.colors.surfaceContainerLow,
    borderRadius: 12,
    padding: THEME.spacing.gutterMd,
    gap: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    fontSize: 20,
    color: THEME.colors.onSurface,
  },
  title: {
    fontSize: THEME.fonts.sizes.xl,
    fontWeight: "500",
    color: THEME.colors.onSurface,
  },
  badge: {
    backgroundColor: THEME.colors.surfaceContainerHigh,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  badgeText: {
    fontSize: THEME.fonts.sizes.sm,
    textTransform: "uppercase",
    color: THEME.colors.onSurfaceVariant,
  },
});
