import React from "react";
import { Pressable, StyleSheet, ViewStyle } from "react-native";
import { AppText } from "../ui/AppText";
import { THEME } from "../../theme/theme";

interface FilterChipProps {
  label: string;
  active?: boolean;
  onPress?: () => void;
  variant?: "square" | "rounded";
  style?: ViewStyle;
}

export function FilterChip({
  label,
  active = false,
  onPress,
  variant = "square",
  style,
}: FilterChipProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.base,
        variant === "rounded" ? styles.rounded : styles.square,
        active ? styles.active : styles.inactive,
        style,
      ]}
    >
      <AppText
        style={[
          styles.label,
          active ? styles.labelActive : styles.labelInactive,
        ]}
      >
        {label}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  square: {
    // no extra radius
  },
  rounded: {
    borderRadius: 9999,
  },
  active: {
    backgroundColor: THEME.colors.primary,
  },
  inactive: {
    backgroundColor: THEME.colors.surfaceContainerHigh,
  },
  label: {
    fontSize: THEME.fonts.sizes.sm,
    textTransform: "uppercase",
    letterSpacing: 0.05,
  },
  labelActive: {
    color: THEME.colors.onPrimary,
  },
  labelInactive: {
    color: THEME.colors.onSurfaceVariant,
  },
});
