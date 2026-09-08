import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { THEME } from "../../theme/theme";

interface ToggleProps {
  value: boolean;
  onValueChange?: (value: boolean) => void;
  disabled?: boolean;
}

export function Toggle({ value, onValueChange, disabled }: ToggleProps) {
  return (
    <Pressable
      onPress={() => onValueChange?.(!value)}
      disabled={disabled}
      style={[styles.track, value && styles.trackActive]}
      accessibilityRole="switch"
      accessibilityState={{ checked: value, disabled }}
    >
      <View style={[styles.thumb, value && styles.thumbActive]} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  track: {
    width: 44,
    height: 24,
    borderRadius: 12,
    backgroundColor: THEME.colors.surfaceContainerHighest,
    justifyContent: "center",
    paddingHorizontal: 2,
  },
  trackActive: {
    backgroundColor: THEME.colors.primary,
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: THEME.colors.onPrimary,
    borderWidth: 1,
    borderColor: THEME.colors.outlineVariant,
  },
  thumbActive: {
    alignSelf: "flex-end",
    borderColor: THEME.colors.onPrimary,
  },
});
