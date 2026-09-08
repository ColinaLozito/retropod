import React from "react";
import { ListItem } from "../shared/ListItem";

interface PlaylistListItemProps {
  name: string;
  date: string;
  songCount: number;
  icon?: string;
  onPress?: () => void;
}

export function PlaylistListItem({
  name,
  date,
  songCount,
  icon = "playlist_play",
  onPress,
}: PlaylistListItemProps) {
  return (
    <ListItem
      title={name}
      subtitle={`${date} • ${songCount} canciones`}
      icon={icon}
      onPress={onPress}
    />
  );
}
