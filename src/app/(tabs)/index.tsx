// Home screen - Challenge list (Expo Router)
import React, { useCallback } from "react";
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000000",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          alignSelf: "center",
          fontSize: 16,
          fontWeight: "bold",
          color: "white",
        }}
      >
        HOME
      </Text>
    </View>
  );
}
