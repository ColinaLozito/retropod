import React from "react";
import { ListItem } from "../shared/ListItem";

interface AlbumListItemProps {
  title: string;
  artist: string;
  trackCount: number;
  duration: string;
  thumbnailUri?: string;
  onPress?: () => void;
}

export function AlbumListItem({
  title,
  artist,
  trackCount,
  duration,
  thumbnailUri,
  onPress,
}: AlbumListItemProps) {
  return (
    <ListItem
      title={title}
      subtitle={artist}
      meta={`${trackCount} Tracks`}
      metaSecondary={duration}
      thumbnailUri={thumbnailUri}
      onPress={onPress}
    />
  );
}
