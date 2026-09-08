import React from "react";
import { ScrollView, StyleSheet, ViewStyle } from "react-native";
import { FilterChip } from "../shared/FilterChip";

interface CoverflowChipsProps {
  options: string[];
  activeOption: string;
  onOptionPress: (option: string) => void;
  style?: ViewStyle;
}

export function CoverflowChips({
  options,
  activeOption,
  onOptionPress,
  style,
}: CoverflowChipsProps) {
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
          variant="rounded"
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    paddingVertical: 8,
  },
});
