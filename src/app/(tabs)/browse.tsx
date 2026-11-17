// Browse / Coverflow screen — placeholder
import React from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { THEME } from "../../theme/theme";
import { AppText } from "../../components/ui/AppText";
import { HeaderBar } from "../../components/shared/HeaderBar";

export default function BrowseScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <HeaderBar />
      <View style={[styles.content, { paddingTop: (insets.top || 48) + 52 }]}>
        <AppText style={styles.title}>Browse</AppText>
        <AppText style={styles.subtitle}>Album coverflow</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.background,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: THEME.fonts.sizes.xxl,
    fontWeight: "600",
    color: THEME.colors.onSurface,
  },
  subtitle: {
    fontSize: THEME.fonts.sizes.md,
    color: THEME.colors.onSurfaceVariant,
    marginTop: 8,
  },
});
