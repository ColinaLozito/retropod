import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppText } from "../ui/AppText";
import { THEME } from "../../theme/theme";

export function HeaderBar() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top || 48 }]}>
      <View style={styles.left}>
        <Image
          source={require("../../../assets/icons/play_icon.png")}
          style={styles.logoImage}
        />
        <AppText style={styles.logoText}>RetroPod</AppText>
      </View>
      <View style={styles.avatar}>
        <AppText style={styles.avatarIcon}>person</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: THEME.spacing.gutterMd,
    paddingBottom: THEME.spacing.sm,
    backgroundColor: THEME.colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: THEME.colors.outlineVariant,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logoImage: {
    width: 28,
    height: 28,
    resizeMode: "contain",
    tintColor: THEME.colors.onSurface,
  },
  logoText: {
    fontSize: THEME.fonts.sizes.xl,
    fontWeight: "500",
    color: THEME.colors.onSurface,
    textTransform: "uppercase",
    letterSpacing: -0.01,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: THEME.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarIcon: {
    fontSize: 14,
    color: THEME.colors.onPrimary,
  },
});
