import React from "react";
import { View, StyleSheet } from "react-native";
import { AppText } from "../ui/AppText";
import { THEME } from "../../theme/theme";

interface NowPlayingInfoProps {
  trackNumber: number;
  totalTracks: number;
  title: string;
  artist: string;
  album: string;
}

export function NowPlayingInfo({
  trackNumber,
  totalTracks,
  title,
  artist,
  album,
}: NowPlayingInfoProps) {
  return (
    <View style={styles.container}>
      <AppText style={styles.trackLabel}>
        Now Playing — Track {trackNumber} of {totalTracks}
      </AppText>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.artist}>
        {artist} • {album}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 8,
  },
  trackLabel: {
    fontSize: THEME.fonts.sizes.sm,
    textTransform: "uppercase",
    letterSpacing: 0.08,
    color: THEME.colors.onSurfaceVariant,
  },
  title: {
    fontSize: THEME.fonts.sizes.xl,
    fontWeight: "500",
    color: THEME.colors.onSurface,
    marginTop: 4,
    textAlign: "center",
  },
  artist: {
    fontSize: THEME.fonts.sizes.md,
    fontStyle: "italic",
    color: THEME.colors.onSurfaceVariant,
    marginTop: 4,
    textAlign: "center",
  },
});
