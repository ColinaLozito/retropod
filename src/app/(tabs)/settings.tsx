import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { THEME } from "../../theme/theme";
import { AppText } from "../../components/ui/AppText";
import { HeaderBar } from "../../components/shared/HeaderBar";
import { FontSelector } from "../../components/settings/FontSelector";
import { EInkDisplayCard } from "../../components/settings/EInkDisplayCard";
import { AudioEngineCard } from "../../components/settings/AudioEngineCard";
import { AboutCard } from "../../components/settings/AboutCard";

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.content, { paddingTop: (insets.top || 48) + 52 }]}
    >
      <HeaderBar />
      <AppText style={styles.title}>Preferences & System</AppText>
      <AppText style={styles.subtitle}>
        Customize your tactile listening experience and physical hardware
        simulation.
      </AppText>

      <AppText style={styles.sectionLabel}>Typography</AppText>
      <FontSelector />

      <AppText style={styles.sectionLabel}>Display</AppText>
      <EInkDisplayCard />

      <AppText style={styles.sectionLabel}>Audio</AppText>
      <AudioEngineCard />

      <AboutCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.background,
  },
  content: {
    padding: THEME.spacing.gutterMd,
    gap: 16,
  },
  title: {
    fontSize: THEME.fonts.sizes.xxl,
    fontWeight: "600",
    color: THEME.colors.onSurface,
  },
  subtitle: {
    fontSize: THEME.fonts.sizes.md,
    color: THEME.colors.onSurfaceVariant,
    marginBottom: 8,
  },
  sectionLabel: {
    fontSize: THEME.fonts.sizes.sm,
    fontWeight: "500",
    color: THEME.colors.onSurfaceVariant,
    textTransform: "uppercase",
    letterSpacing: 0.05,
    marginTop: 8,
  },
});
