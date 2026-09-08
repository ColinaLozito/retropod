import React from "react";
import { ScrollView, StyleSheet, ViewStyle } from "react-native";
import { FilterChip } from "../shared/FilterChip";

interface FilterChipsProps {
  options: string[];
  activeOption: string;
  onOptionPress: (option: string) => void;
  variant?: "square" | "rounded";
  style?: ViewStyle;
}

export function FilterChips({
  options,
  activeOption,
  onOptionPress,
  variant = "square",
  style,
}: FilterChipsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.container, style]}
    >
      {options.map((option) => (
        <FilterChip
          key={option}
          label={option}
          active={option === activeOption}
          onPress={() => onOptionPress(option)}
          variant={variant}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    paddingVertical: 4,
  },
});
