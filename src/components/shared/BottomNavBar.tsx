import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { AppText } from "../ui/AppText";
import { THEME } from "../../theme/theme";

interface Tab {
  key: string;
  label: string;
  icon: string;
}

const TABS: Tab[] = [
  { key: "player", label: "Player", icon: "play_arrow" },
  { key: "library", label: "Library", icon: "library_music" },
  { key: "coverflow", label: "Browse", icon: "gallery_thumbnail" },
  { key: "settings", label: "Settings", icon: "settings" },
];

interface BottomNavBarProps {
  activeTab: string;
  onTabPress: (key: string) => void;
}

export function BottomNavBar({ activeTab, onTabPress }: BottomNavBarProps) {
  return (
    <View style={styles.container}>
      {TABS.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <Pressable
            key={tab.key}
            onPress={() => onTabPress(tab.key)}
            style={[styles.tab, isActive && styles.tabActive]}
          >
            <AppText
              style={[styles.icon, isActive && styles.iconActive]}
            >
              {tab.icon}
            </AppText>
            <AppText
              style={[styles.label, isActive && styles.labelActive]}
            >
              {tab.label}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    flexDirection: "row",
    height: 80,
    paddingBottom: 20,
    backgroundColor: THEME.colors.surface,
    borderTopWidth: 1,
    borderTopColor: THEME.colors.outlineVariant,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  tabActive: {
    backgroundColor: THEME.colors.primary,
  },
  icon: {
    fontSize: 20,
    color: THEME.colors.onSurfaceVariant,
  },
  iconActive: {
    color: THEME.colors.onPrimary,
  },
  label: {
    fontSize: THEME.fonts.sizes.xs,
    textTransform: "uppercase",
    letterSpacing: 0.05,
    color: THEME.colors.onSurfaceVariant,
  },
  labelActive: {
    color: THEME.colors.onPrimary,
  },
});
