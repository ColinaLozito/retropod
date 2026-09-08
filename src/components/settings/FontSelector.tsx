import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { AppText } from "../ui/AppText";
import { useFontStore, FontOption, FONT_MAP } from "../../stores/useFontStore";
import { THEME } from "../../theme/theme";

const FONT_OPTIONS: { id: FontOption; label: string }[] = [
  { id: "indie", label: "Indie Flower" },
  { id: "caveat", label: "Caveat" },
  { id: "shadows", label: "Shadows" },
];

export function FontSelector() {
  const selectedFont = useFontStore((state) => state.selectedFont);
  const setSelectedFont = useFontStore((state) => state.setSelectedFont);

  return (
    <View style={styles.container}>
      {FONT_OPTIONS.map((option) => {
        const isActive = selectedFont === option.id;
        return (
          <Pressable
            key={option.id}
            onPress={() => setSelectedFont(option.id)}
            style={[styles.button, isActive && styles.activeButton]}
          >
            <AppText
              style={[
                styles.label,
                { fontFamily: FONT_MAP[option.id] },
                isActive && styles.activeLabel,
              ]}
            >
              {option.label}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    marginVertical: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderWidth: 1.5,
    borderColor: THEME.colors.border,
    backgroundColor: THEME.colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  activeButton: {
    backgroundColor: THEME.colors.primary,
  },
  label: {
    fontSize: 14,
    color: THEME.colors.onSurface,
  },
  activeLabel: {
    color: THEME.colors.onPrimary,
  },
});
