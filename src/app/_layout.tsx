// Root layout for Expo Router
import { useEffect } from "react";
import { Stack, usePathname } from "expo-router";
import {
  useFonts,
  IndieFlower_400Regular,
} from "@expo-google-fonts/indie-flower";
import { Caveat_400Regular } from "@expo-google-fonts/caveat";
import { ShadowsIntoLight_400Regular } from "@expo-google-fonts/shadows-into-light";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { useTrackPersistence } from "../hooks/useTrackPersistence";
import { useTrackPlayerInit } from "../hooks/useTrackPlayerInit";
import { LoadingOverlay } from "../components/ui/LoadingOverlay";
import { ToastContainer } from "../components/ui/ToastContainer";

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    IndieFlower_400Regular,
    Caveat_400Regular,
    ShadowsIntoLight_400Regular,
  });

  useTrackPersistence();
  const playerReady = useTrackPlayerInit();
  const pathname = usePathname();
  const isModalRoute = pathname?.includes("(modals)") ?? false;

  if (!fontsLoaded && !fontError) {
    return null;
  }

  if (!playerReady) {
    return null;
  }

  return (
    <ErrorBoundary>
      {/* Global notifications - only outside modals */}
      {!isModalRoute && <ToastContainer />}

      {/* Global loading overlay */}
      <LoadingOverlay />

      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="(modals)"
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
      </Stack>
    </ErrorBoundary>
  );
}
