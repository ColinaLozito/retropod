import React from "react";
import { View, StyleSheet } from "react-native";
import { AppText } from "../ui/AppText";
import { SettingsCard } from "./SettingsCard";
import { Button } from "../shared/Button";
import { Toggle } from "../shared/Toggle";
import { useSettingsStore } from "../../stores/useSettingsStore";
import { THEME } from "../../theme/theme";

export function AudioEngineCard() {
  const flacEnabled = useSettingsStore((s) => s.flacEnabled);
  const crossfadeEnabled = useSettingsStore((s) => s.crossfadeEnabled);
  const eqPreset = useSettingsStore((s) => s.eqPreset);
  const setFlacEnabled = useSettingsStore((s) => s.setFlacEnabled);
  const setCrossfadeEnabled = useSettingsStore((s) => s.setCrossfadeEnabled);
  const setEqPreset = useSettingsStore((s) => s.setEqPreset);

  return (
    <SettingsCard icon="graphic_eq" title="Audio Engine" badge="Hi-Fi">
      {/* FLAC Streaming Toggle */}
      <View style={styles.toggleRow}>
        <View style={styles.toggleText}>
          <AppText style={styles.toggleTitle}>Lossless FLAC Streaming</AppText>
          <AppText style={styles.toggleSubtitle}>
            Stream uncompressed 24-bit/96kHz audio
          </AppText>
        </View>
        <Toggle value={flacEnabled} onValueChange={setFlacEnabled} />
      </View>

      {/* Crossfade Toggle */}
      <View style={styles.toggleRow}>
        <View style={styles.toggleText}>
          <AppText style={styles.toggleTitle}>Hardware Crossfade</AppText>
          <AppText style={styles.toggleSubtitle}>
            3-second seamless tape transition
          </AppText>
        </View>
        <Toggle value={crossfadeEnabled} onValueChange={setCrossfadeEnabled} />
      </View>

      {/* Equalizer Preset */}
      <View style={styles.row}>
        <AppText style={styles.label}>Equalizer Preset</AppText>
        <View style={styles.eqGrid}>
          {(["acustico", "vinilo", "calido", "plano"] as const).map((preset) => (
            <Button
              key={preset}
              label={preset.charAt(0).toUpperCase() + preset.slice(1)}
              active={eqPreset === preset}
              onPress={() => setEqPreset(preset)}
            />
          ))}
        </View>
      </View>
    </SettingsCard>
  );
}

const styles = StyleSheet.create({
  row: {
    gap: 8,
  },
  label: {
    fontSize: THEME.fonts.sizes.sm,
    textTransform: "uppercase",
    letterSpacing: 0.05,
    color: THEME.colors.onSurfaceVariant,
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  toggleText: {
    flex: 1,
  },
  toggleTitle: {
    fontSize: THEME.fonts.sizes.lg,
    color: THEME.colors.onSurface,
  },
  toggleSubtitle: {
    fontSize: THEME.fonts.sizes.md,
    color: THEME.colors.onSurfaceVariant,
    marginTop: 2,
  },
  eqGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
});
