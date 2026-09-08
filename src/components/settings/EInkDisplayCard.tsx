import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { AppText } from "../ui/AppText";
import { SettingsCard } from "./SettingsCard";
import { Button } from "../shared/Button";
import { Toggle } from "../shared/Toggle";
import { THEME } from "../../theme/theme";

export function EInkDisplayCard() {
  const [intensity, setIntensity] = useState<"bajo" | "medio" | "alto">("medio");
  const [darkInk, setDarkInk] = useState(false);
  const [fontStyle, setFontStyle] = useState<"clasico" | "negrita">("negrita");

  return (
    <SettingsCard icon="texture" title="E-Ink Display" badge="Paper-Sim">
      {/* Paper Texture Intensity */}
      <View style={styles.row}>
        <AppText style={styles.label}>Paper Texture Intensity</AppText>
        <View style={styles.buttonGrid}>
          {(["bajo", "medio", "alto"] as const).map((level) => (
            <Button
              key={level}
              label={level.charAt(0).toUpperCase() + level.slice(1)}
              active={intensity === level}
              onPress={() => setIntensity(level)}
            />
          ))}
        </View>
      </View>

      {/* Dark E-Ink Toggle */}
      <View style={styles.toggleRow}>
        <View style={styles.toggleText}>
          <AppText style={styles.toggleTitle}>Inverted Dark E-Ink</AppText>
          <AppText style={styles.toggleSubtitle}>
            High-contrast night reading mode
          </AppText>
        </View>
        <Toggle value={darkInk} onValueChange={setDarkInk} />
      </View>

      {/* Font Weight & Press Style */}
      <View style={styles.row}>
        <AppText style={styles.label}>Font Weight & Press Style</AppText>
        <View style={styles.buttonGridHalf}>
          <Button
            label="Clásico"
            active={fontStyle === "clasico"}
            onPress={() => setFontStyle("clasico")}
          />
          <Button
            label="Negrita Imprenta"
            active={fontStyle === "negrita"}
            onPress={() => setFontStyle("negrita")}
          />
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
  buttonGrid: {
    flexDirection: "row",
    gap: 8,
  },
  buttonGridHalf: {
    flexDirection: "row",
    gap: 8,
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
});
