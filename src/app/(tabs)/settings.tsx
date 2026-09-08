import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { THEME } from "../../theme/theme";
import { AppText } from "../../components/ui/AppText";
import { FontSelector } from "../../components/settings/FontSelector";

export default function SettingsScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <AppText style={styles.title}>Settings</AppText>

      <View style={styles.section}>
        <AppText style={styles.sectionTitle}>Font</AppText>
        <FontSelector />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.background,
  },
  content: {
    padding: THEME.spacing.marginPage,
    paddingTop: 60,
  },
  title: {
    fontSize: THEME.fonts.sizes.xxl,
    fontWeight: '700',
    color: THEME.colors.onSurface,
    marginBottom: THEME.spacing.lg,
  },
  section: {
    marginBottom: THEME.spacing.xl,
  },
  sectionTitle: {
    fontSize: THEME.fonts.sizes.sm,
    fontWeight: '500',
    color: THEME.colors.onSurfaceVariant,
    textTransform: "uppercase",
    letterSpacing: 0.05,
    marginBottom: THEME.spacing.xs,
  },
});
