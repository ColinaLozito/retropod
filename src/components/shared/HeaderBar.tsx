import React from "react";
import { View, StyleSheet } from "react-native";
import { AppText } from "../ui/AppText";
import { THEME } from "../../theme/theme";

export function HeaderBar() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.logoMark}>
          <AppText style={styles.logoIcon}>♫</AppText>
        </View>
        <AppText style={styles.logoText}>MonoPod</AppText>
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
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: THEME.spacing.gutterMd,
    paddingTop: 48,
    backgroundColor: THEME.colors.surface,
    // In RN, backdrop-blur is achieved via BlurView — simplified here
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logoMark: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  logoIcon: {
    fontSize: 20,
    color: THEME.colors.onSurface,
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
