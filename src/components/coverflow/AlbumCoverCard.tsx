import React from "react";
import { View, Pressable, Image, StyleSheet, ViewStyle } from "react-native";
import { AppText } from "../ui/AppText";
import { THEME } from "../../theme/theme";

interface AlbumCoverCardProps {
  title: string;
  artist: string;
  year: string;
  volumeNumber?: string;
  coverUri?: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export function AlbumCoverCard({
  title,
  artist,
  year,
  volumeNumber,
  coverUri,
  onPress,
  style,
}: AlbumCoverCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        style,
      ]}
    >
      {/* Album art */}
      <View style={styles.artContainer}>
        {coverUri ? (
          <Image source={{ uri: coverUri }} style={styles.art} />
        ) : (
          <View style={styles.artPlaceholder} />
        )}
        {/* Halftone overlay */}
        <View style={styles.halftoneOverlay} />
        {/* Volume badge */}
        {volumeNumber ? (
          <View style={styles.badge}>
            <AppText style={styles.badgeText}>{volumeNumber}</AppText>
          </View>
        ) : null}
      </View>

      {/* Text */}
      <View style={styles.textBlock}>
        <AppText style={styles.title} numberOfLines={1}>
          {title}
        </AppText>
        <View style={styles.metaRow}>
          <AppText style={styles.artist} numberOfLines={1}>
            {artist}
          </AppText>
          <AppText style={styles.year}>{year}</AppText>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    // Press animation handled by Pressable
  },
  pressed: {
    transform: [{ scale: 0.97 }],
  },
  artContainer: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: THEME.colors.surfaceContainerHighest,
    overflow: "hidden",
    borderRadius: 8,
  },
  art: {
    width: "100%",
    height: "100%",
    // E-ink grayscale effect
    // In RN, tintColor + opacity is limited; use a filter if needed
  },
  artPlaceholder: {
    width: "100%",
    height: "100%",
    backgroundColor: THEME.colors.surfaceContainerHigh,
  },
  halftoneOverlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.2,
    backgroundColor: THEME.colors.onSurface,
  },
  badge: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: THEME.colors.primary,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 2,
  },
  badgeText: {
    fontSize: THEME.fonts.sizes.xs,
    color: THEME.colors.onPrimary,
  },
  textBlock: {
    marginTop: 8,
  },
  title: {
    fontSize: THEME.fonts.sizes.lg,
    fontWeight: "500",
    color: THEME.colors.onSurface,
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
  },
  artist: {
    fontSize: THEME.fonts.sizes.md,
    color: THEME.colors.onSurfaceVariant,
    flex: 1,
  },
  year: {
    fontSize: THEME.fonts.sizes.md,
    color: THEME.colors.onSurfaceVariant,
    marginLeft: 8,
  },
});
