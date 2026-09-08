import React from "react";
import { Pressable, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { AppText } from "../ui/AppText";
import { THEME } from "../../theme/theme";

interface ButtonProps {
  label: string;
  active?: boolean;
  onPress?: () => void;
  variant?: "filled" | "outlined";
  size?: "sm" | "md";
  style?: ViewStyle;
  labelStyle?: TextStyle;
}

export function Button({
  label,
  active = false,
  onPress,
  variant = "outlined",
  size = "md",
  style,
  labelStyle,
}: ButtonProps) {
  const isFilled = active || variant === "filled";

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.base,
        size === "sm" ? styles.sm : styles.md,
        isFilled ? styles.filled : styles.outlined,
        style,
      ]}
    >
      <AppText
        style={[
          styles.label,
          size === "sm" ? styles.labelSm : styles.labelMd,
          isFilled ? styles.labelFilled : styles.labelOutlined,
          labelStyle,
        ]}
      >
        {label}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center",
  },
  sm: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  md: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  filled: {
    backgroundColor: THEME.colors.primary,
  },
  outlined: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: THEME.colors.outlineVariant,
  },
  label: {
    textTransform: "uppercase",
  },
  labelSm: {
    fontSize: THEME.fonts.sizes.xs,
    letterSpacing: 0.08,
  },
  labelMd: {
    fontSize: THEME.fonts.sizes.sm,
    letterSpacing: 0.05,
  },
  labelFilled: {
    color: THEME.colors.onPrimary,
  },
  labelOutlined: {
    color: THEME.colors.onSurface,
  },
});
