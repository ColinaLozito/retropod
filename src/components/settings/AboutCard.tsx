import React from "react";
import { View, StyleSheet } from "react-native";
import { AppText } from "../ui/AppText";
import { SettingsCard } from "./SettingsCard";
import { THEME } from "../../theme/theme";

export function AboutCard() {
  return (
    <SettingsCard icon="info" title="About MonoPod" badge="v2.4.0">
      <AppText style={styles.description}>
        MonoPod is crafted as a quiet sanctuary for sound enthusiasts. Inspired
        by the mechanical feedback, tactile weight, and undistracted solitude of
        portable vintage music hardware. Dedicated to everyone who misses the
        authentic click of a physical wheel and the warm smell of solder and
        spinning magnetic tape.
      </AppText>

      <View style={styles.divider} />

      <View style={styles.fingerprintRow}>
        <AppText style={styles.fingerprintLabel}>Build Fingerprint</AppText>
        <AppText style={styles.fingerprintValue}>#9402-EINK-RELEASE</AppText>
      </View>
    </SettingsCard>
  );
}

const styles = StyleSheet.create({
  description: {
    fontSize: THEME.fonts.sizes.md,
    lineHeight: 22,
    color: THEME.colors.onSurfaceVariant,
  },
  divider: {
    height: 1,
    backgroundColor: THEME.colors.outlineVariant,
    opacity: 0.3,
  },
  fingerprintRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fingerprintLabel: {
    fontSize: THEME.fonts.sizes.sm,
    textTransform: "uppercase",
    color: THEME.colors.onSurfaceVariant,
  },
  fingerprintValue: {
    fontSize: THEME.fonts.sizes.sm,
    fontFamily: "Courier Prime",
    color: THEME.colors.onSurfaceVariant,
  },
});
