import React, { useState } from "react";
import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { AppText } from "../ui/AppText";
import { THEME } from "../../theme/theme";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onMicPress?: () => void;
}

export function SearchBar({
  placeholder = "Buscar artista o álbum...",
  value,
  onChangeText,
  onMicPress,
}: SearchBarProps) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={[styles.container, focused && styles.containerFocused]}>
      <AppText style={styles.searchIcon}>search</AppText>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={THEME.colors.outline}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <Pressable onPress={onMicPress} style={styles.micButton} hitSlop={8}>
        <AppText style={styles.micIcon}>mic</AppText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    backgroundColor: THEME.colors.surfaceContainerLow,
    paddingHorizontal: 12,
    shadowColor: "transparent",
  },
  containerFocused: {
    // Simulates focus ring
    shadowColor: THEME.colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: {
    fontSize: 20,
    color: THEME.colors.outline,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: THEME.fonts.sizes.lg,
    color: THEME.colors.onSurface,
  },
  micButton: {
    padding: 4,
    marginLeft: 8,
  },
  micIcon: {
    fontSize: 18,
    color: THEME.colors.onSurfaceVariant,
  },
});
