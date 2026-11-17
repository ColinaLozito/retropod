// Tab layout for main navigation — native Expo Router tab bar
import React from "react";
import { Tabs } from "expo-router";
import { Image, ImageStyle, StyleProp, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { THEME } from "../../theme/theme";

const TabIcon = ({ icon, focused }: { icon: number; focused: boolean }) => (
  <Image
    source={icon}
    style={{
      width: 24,
      height: 24,
      tintColor: focused ? THEME.colors.primary : THEME.colors.onSurfaceVariant,
    } as StyleProp<ImageStyle>}
  />
);

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: THEME.colors.primary,
        tabBarInactiveTintColor: THEME.colors.onSurfaceVariant,
        tabBarStyle: {
          backgroundColor: THEME.colors.surface,
          borderTopColor: THEME.colors.outlineVariant,
          borderTopWidth: 1,
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: THEME.fonts.sizes.xs,
          textTransform: "uppercase",
          letterSpacing: 0.05,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Player",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={require("../../../assets/icons/play_icon.png")} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={require("../../../assets/icons/home_icon.png")} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="browse"
        options={{
          title: "Browse",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={require("../../../assets/icons/badge_icon.png")} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={require("../../../assets/icons/profile_icon.png")} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
