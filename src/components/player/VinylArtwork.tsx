import React from "react";
import { View, StyleSheet } from "react-native";
import { AppText } from "../ui/AppText";
import { THEME } from "../../theme/theme";

interface VinylArtworkProps {
  side?: string;
  trackNumber?: number;
}

export function VinylArtwork({ side = "A", trackNumber = 4 }: VinylArtworkProps) {
  return (
    <View style={styles.container}>
      {/* Outer sleeve */}
      <View style={styles.sleeve}>
        {/* Vinyl disc */}
        <View style={styles.disc}>
          <View style={styles.groove1}>
            <View style={styles.groove2}>
              <View style={styles.groove3}>
                <View style={styles.centerDot} />
              </View>
            </View>
          </View>
        </View>

        {/* Labels */}
        <View style={styles.topRow}>
          <AppText style={styles.brandLabel}>MonoPod</AppText>
          <AppText style={styles.queueIcon}>♫</AppText>
        </View>

        <View style={styles.centerIcon}>
          <AppText style={styles.iconText}>▶</AppText>
        </View>

        <View style={styles.sideLabel}>
          <AppText style={styles.sideText}>
            Side {side} // Tr. {trackNumber}
          </AppText>
        </View>

        <View style={styles.bottomRow}>
          <AppText style={styles.rpmLabel}>33 ⅓ RPM</AppText>
          <AppText style={styles.monoLabel}>HIFI MONO</AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 8,
  },
  sleeve: {
    width: 176,
    height: 176,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: THEME.colors.outlineVariant,
    backgroundColor: THEME.colors.surfaceContainerHigh,
    overflow: "hidden",
  },
  disc: {
    position: "absolute",
    right: -20,
    bottom: -20,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: THEME.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  groove1: {
    width: 112,
    height: 112,
    borderRadius: 56,
    borderWidth: 1,
    borderColor: THEME.colors.outlineVariant,
    alignItems: "center",
    justifyContent: "center",
  },
  groove2: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: THEME.colors.outlineVariant,
    alignItems: "center",
    justifyContent: "center",
  },
  groove3: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: THEME.colors.outlineVariant,
    alignItems: "center",
    justifyContent: "center",
  },
  centerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: THEME.colors.surface,
  },
  topRow: {
    position: "absolute",
    top: 8,
    left: 8,
    right: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 2,
  },
  brandLabel: {
    fontSize: 9,
    textTransform: "uppercase",
    letterSpacing: 0.08,
    color: THEME.colors.onSurface,
  },
  queueIcon: {
    fontSize: 16,
    color: THEME.colors.onSurface,
  },
  centerIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -16,
    marginLeft: -16,
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: THEME.colors.primary,
    backgroundColor: THEME.colors.surface,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  iconText: {
    fontSize: 14,
    color: THEME.colors.primary,
  },
  sideLabel: {
    position: "absolute",
    bottom: 32,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 2,
  },
  sideText: {
    fontSize: 11,
    fontStyle: "italic",
    color: THEME.colors.onSurface,
  },
  bottomRow: {
    position: "absolute",
    bottom: 8,
    left: 8,
    right: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 2,
  },
  rpmLabel: {
    fontSize: 8,
    textTransform: "uppercase",
    letterSpacing: 0.05,
    color: THEME.colors.onSurfaceVariant,
  },
  monoLabel: {
    fontSize: 8,
    textTransform: "uppercase",
    letterSpacing: 0.05,
    color: THEME.colors.onSurfaceVariant,
  },
});
