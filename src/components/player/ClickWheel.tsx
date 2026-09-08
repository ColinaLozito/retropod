import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { AppText } from "../ui/AppText";
import { THEME } from "../../theme/theme";

interface ClickWheelProps {
  onPlayPause?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  onMenu?: () => void;
  onSelect?: () => void;
  isPlaying?: boolean;
}

export function ClickWheel({
  onPlayPause,
  onNext,
  onPrevious,
  onMenu,
  onSelect,
  isPlaying = false,
}: ClickWheelProps) {
  return (
    <View style={styles.container}>
      {/* Outer ring */}
      <View style={styles.ring}>
        {/* MENU — top */}
        <Pressable
          onPress={onMenu}
          style={styles.menuButton}
          hitSlop={20}
        >
          <AppText style={styles.menuLabel}>MENU</AppText>
        </Pressable>

        {/* REWIND — left */}
        <Pressable
          onPress={onPrevious}
          style={styles.rewindButton}
          hitSlop={20}
        >
          <AppText style={styles.controlIcon}>⏮</AppText>
        </Pressable>

        {/* FAST FORWARD — right */}
        <Pressable
          onPress={onNext}
          style={styles.forwardButton}
          hitSlop={20}
        >
          <AppText style={styles.controlIcon}>⏭</AppText>
        </Pressable>

        {/* PLAY/PAUSE — bottom */}
        <Pressable
          onPress={onPlayPause}
          style={styles.playButton}
          hitSlop={20}
        >
          <AppText style={styles.controlIcon}>
            {isPlaying ? "⏸" : "▶"}
          </AppText>
        </Pressable>

        {/* SELECT — center */}
        <Pressable
          onPress={onSelect}
          style={({ pressed }) => [
            styles.selectButton,
            pressed && styles.selectPressed,
          ]}
        >
          <AppText style={styles.selectLabel}>Select</AppText>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  ring: {
    width: 230,
    height: 230,
    borderRadius: 115,
    backgroundColor: THEME.colors.primaryContainer,
    borderWidth: 2,
    borderColor: THEME.colors.outlineVariant,
    alignItems: "center",
    justifyContent: "center",
    // Deep shadow for physicality
    shadowColor: THEME.colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  menuButton: {
    position: "absolute",
    top: 16,
    padding: 8,
  },
  menuLabel: {
    fontSize: THEME.fonts.sizes.sm,
    textTransform: "uppercase",
    letterSpacing: 0.05,
    color: THEME.colors.onSurface,
  },
  rewindButton: {
    position: "absolute",
    left: 20,
    padding: 8,
  },
  forwardButton: {
    position: "absolute",
    right: 20,
    padding: 8,
  },
  playButton: {
    position: "absolute",
    bottom: 16,
    padding: 8,
  },
  controlIcon: {
    fontSize: 20,
    color: THEME.colors.onSurface,
  },
  selectButton: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: THEME.colors.surface,
    borderWidth: 1,
    borderColor: THEME.colors.outlineVariant,
    alignItems: "center",
    justifyContent: "center",
  },
  selectPressed: {
    backgroundColor: THEME.colors.surfaceContainerHigh,
  },
  selectLabel: {
    fontSize: THEME.fonts.sizes.sm,
    color: THEME.colors.onSurface,
  },
});
