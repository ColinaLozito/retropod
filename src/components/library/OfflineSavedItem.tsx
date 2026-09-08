import React from "react";
import { ListItem } from "../shared/ListItem";

interface OfflineSavedItemProps {
  name: string;
  size: string;
  icon?: string;
  onPress?: () => void;
}

export function OfflineSavedItem({
  name,
  size,
  icon = "offline_bolt",
  onPress,
}: OfflineSavedItemProps) {
  return (
    <ListItem
      title={name}
      subtitle={size}
      icon={icon}
      showChevron={false}
      showCheck
      onPress={onPress}
    />
  );
}
