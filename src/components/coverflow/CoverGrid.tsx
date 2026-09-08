import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { THEME } from "../../theme/theme";

interface CoverGridProps {
  children: React.ReactNode;
  columns?: 2 | 3;
  style?: ViewStyle;
}

export function CoverGrid({ children, columns = 2, style }: CoverGridProps) {
  return (
    <View style={[styles.grid, style]}>
      {React.Children.map(children, (child) => (
        <View style={[styles.cell, columns === 3 && styles.cellThree]}>
          {child}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: THEME.spacing.md,
  },
  cell: {
    flex: 1,
    minWidth: "45%",
  },
  cellThree: {
    minWidth: "30%",
  },
});
