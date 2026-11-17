import React from "react";
import { View, Pressable, Image, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppText } from "../ui/AppText";
import { THEME } from "../../theme/theme";

interface Tab {
  key: string;
  label: string;
  icon: any;
}

const TABS: Tab[] = [
  {
    key: "index",
    label: "Player",
    icon: require("../../../assets/icons/play_icon.png"),
  },
  {
    key: "library",
    label: "Library",
    icon: require("../../../assets/icons/home_icon.png"),
  },
  {
    key: "browse",
    label: "Browse",
    icon: require("../../../assets/icons/badge_icon.png"),
  },
  {
    key: "settings",
    label: "Settings",
    icon: require("../../../assets/icons/profile_icon.png"),
  },
];

interface BottomNavBarProps {
  activeTab: string;
  onTabPress: (key: string) => void;
}

export function BottomNavBar({ activeTab, onTabPress }: BottomNavBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <View style={styles.bar}>
        {TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <Pressable
              key={tab.key}
              onPress={() => onTabPress(tab.key)}
              style={[styles.tab, isActive && styles.tabActive]}
            >
              <Image
                source={tab.icon}
                style={[styles.icon, isActive && styles.iconActive]}
              />
              <AppText style={[styles.label, isActive && styles.labelActive]}>
                {tab.label}
              </AppText>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.colors.surface,
    borderTopWidth: 1,
    borderTopColor: THEME.colors.outlineVariant,
  },
  bar: {
    flexDirection: "row",
    height: 56,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  tabActive: {
    backgroundColor: THEME.colors.primary,
  },
  icon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
    tintColor: THEME.colors.onSurfaceVariant,
  },
  iconActive: {
    tintColor: THEME.colors.onPrimary,
  },
  label: {
    fontSize: THEME.fonts.sizes.xs,
    textTransform: "uppercase",
    letterSpacing: 0.05,
    color: THEME.colors.onSurfaceVariant,
  },
  labelActive: {
    color: THEME.colors.onPrimary,
    fontWeight: "600",
  },
});
