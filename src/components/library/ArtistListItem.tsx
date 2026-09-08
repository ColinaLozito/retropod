import React from "react";
import { ListItem } from "../shared/ListItem";

interface ArtistListItemProps {
  name: string;
  albumCount: number;
  songCount: number;
  avatarUri?: string;
  onPress?: () => void;
}

export function ArtistListItem({
  name,
  albumCount,
  songCount,
  avatarUri,
  onPress,
}: ArtistListItemProps) {
  return (
    <ListItem
      title={name}
      subtitle={`${albumCount} Álbumes • ${songCount} canciones`}
      thumbnailUri={avatarUri}
      circular
      onPress={onPress}
    />
  );
}
