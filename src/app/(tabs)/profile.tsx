// Profile screen - User progress and stats
import React, { useCallback } from "react";
import { View, Text, ScrollView, Alert, TouchableOpacity } from "react-native";
import { GlassCard } from "../../components/ui/GlassCard";
import { AchievementsList } from "../../components/profile/AchievementsList";
import { ChallengeProgressList } from "../../components/challenge/ChallengeProgressList";
import { useMusicStore, selectChallenges } from "../../stores/musicStore";
import {
  useUserStore,
  selectListenedTimeMap,
  selectCompletedChallenges,
  selectAwardedChallenges,
} from "../../stores/userStore";
import { calculateTotalPoints } from "../../utils/pointsCalculator";
import { styles } from "../../theme/app/_profile.styles";

export default function ProfileScreen() {
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
        PROFILE
      </Text>
    </View>
  );
}
