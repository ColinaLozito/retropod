import React from "react";
import { View, Pressable, Image, StyleSheet, ViewStyle } from "react-native";
import { AppText } from "../ui/AppText";
import { THEME } from "../../theme/theme";

interface ListItemProps {
  title: string;
  subtitle?: string;
  meta?: string;
  metaSecondary?: string;
  thumbnailUri?: string;
  icon?: string;
  circular?: boolean;
  showChevron?: boolean;
  showCheck?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
}

export function ListItem({
  title,
  subtitle,
  meta,
  metaSecondary,
  thumbnailUri,
  icon,
  circular = false,
  showChevron = true,
  showCheck = false,
  onPress,
  style,
}: ListItemProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed, style]}
    >
      <View style={styles.left}>
        {thumbnailUri ? (
          <Image
            source={{ uri: thumbnailUri }}
            style={[styles.thumbnail, circular && styles.circular]}
          />
        ) : icon ? (
          <View style={[styles.iconSquare, circular && styles.circular]}>
            <AppText style={styles.iconText}>{icon}</AppText>
          </View>
        ) : null}
        <View style={styles.textColumn}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          {subtitle ? (
            <AppText style={styles.subtitle} numberOfLines={1}>
              {subtitle}
            </AppText>
          ) : null}
        </View>
      </View>
      <View style={styles.right}>
        {(meta || metaSecondary) && (
          <View style={styles.metaColumn}>
            {meta ? (
              <AppText style={styles.meta}>{meta}</AppText>
            ) : null}
            {metaSecondary ? (
              <AppText style={styles.metaSecondary}>{metaSecondary}</AppText>
            ) : null}
          </View>
        )}
        {showCheck ? (
          <AppText style={styles.checkIcon}>check_circle</AppText>
        ) : showChevron ? (
          <AppText style={styles.chevron}>chevron_right</AppText>
        ) : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  pressed: {
    backgroundColor: THEME.colors.primary,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    minWidth: 0,
  },
  thumbnail: {
    width: 48,
    height: 48,
    marginRight: 12,
  },
  circular: {
    borderRadius: 24,
  },
  iconSquare: {
    width: 48,
    height: 48,
    marginRight: 12,
    backgroundColor: THEME.colors.surfaceContainerHigh,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    fontSize: 20,
    color: THEME.colors.onSurface,
  },
  textColumn: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    fontSize: THEME.fonts.sizes.lg,
    fontWeight: "600",
    color: THEME.colors.onSurface,
  },
  subtitle: {
    fontSize: THEME.fonts.sizes.md,
    color: THEME.colors.onSurfaceVariant,
    marginTop: 2,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginLeft: 12,
  },
  metaColumn: {
    alignItems: "flex-end",
  },
  meta: {
    fontSize: THEME.fonts.sizes.sm,
    color: THEME.colors.onSurfaceVariant,
  },
  metaSecondary: {
    fontSize: THEME.fonts.sizes.sm,
    color: THEME.colors.outline,
  },
  chevron: {
    fontSize: 20,
    color: THEME.colors.onSurfaceVariant,
  },
  checkIcon: {
    fontSize: 20,
    color: THEME.colors.onSurfaceVariant,
  },
});
