import React from "react";
import { View, StyleSheet } from "react-native";
import { AppText } from "../ui/AppText";
import { THEME } from "../../theme/theme";

interface TimelineScrubberProps {
  currentTime: string;
  totalTime: string;
  progress: number; // 0-1
  onSeek?: (progress: number) => void;
}

export function TimelineScrubber({
  currentTime,
  totalTime,
  progress = 0,
  onSeek,
}: TimelineScrubberProps) {
  const clampedProgress = Math.max(0, Math.min(1, progress));

  return (
    <View style={styles.container}>
      {/* Time labels */}
      <View style={styles.timeRow}>
        <AppText style={styles.time}>{currentTime}</AppText>
        <AppText style={styles.time}>{totalTime}</AppText>
      </View>

      {/* Track */}
      <View style={styles.track}>
        <View style={[styles.filled, { width: `${clampedProgress * 100}%` }]} />
        <View
          style={[
            styles.handle,
            { left: `${clampedProgress * 100}%` },
          ]}
        />
      </View>

      {/* Tick marks */}
      <View style={styles.ticks}>
        {Array.from({ length: 20 }).map((_, i) => (
          <View
            key={i}
            style={[styles.tick, i % 5 === 0 && styles.tickLong]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 280,
  },
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  time: {
    fontSize: 11,
    fontFamily: "Courier Prime",
    fontWeight: "700",
    letterSpacing: -0.03,
    color: THEME.colors.onSurfaceVariant,
  },
  track: {
    height: 2,
    backgroundColor: THEME.colors.outlineVariant,
    position: "relative",
  },
  filled: {
    height: "100%",
    backgroundColor: THEME.colors.primary,
  },
  handle: {
    position: "absolute",
    top: -6,
    width: 6,
    height: 14,
    backgroundColor: THEME.colors.primary,
    marginLeft: -3,
  },
  ticks: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  tick: {
    width: 1,
    height: 4,
    backgroundColor: THEME.colors.outlineVariant,
  },
  tickLong: {
    height: 8,
  },
});
