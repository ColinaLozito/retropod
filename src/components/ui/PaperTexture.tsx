import React, { useMemo } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { useSettingsStore } from "../../stores/useSettingsStore";
import { THEME } from "../../theme/theme";

const { width, height } = Dimensions.get("window");

const INTENSITY_OPACITY: Record<string, number> = {
  bajo: 0.03,
  medio: 0.07,
  alto: 0.12,
};

function PaperGrain({ opacity }: { opacity: number }) {
  const dots = useMemo(() => {
    const result: { x: number; y: number; size: number; opacity: number }[] = [];
    const count = 120;
    for (let i = 0; i < count; i++) {
      result.push({
        x: (Math.sin(i * 127.1 + i * 311.7) * 0.5 + 0.5) * width,
        y: (Math.sin(i * 269.5 + i * 183.3) * 0.5 + 0.5) * height,
        size: 1 + (Math.sin(i * 74.7) * 0.5 + 0.5) * 2,
        opacity: 0.3 + (Math.sin(i * 43.1) * 0.5 + 0.5) * 0.7,
      });
    }
    return result;
  }, []);

  return (
    <View style={[StyleSheet.absoluteFill, { opacity }]} pointerEvents="none">
      {dots.map((dot, i) => (
        <View
          key={i}
          style={{
            position: "absolute",
            left: dot.x,
            top: dot.y,
            width: dot.size,
            height: dot.size,
            borderRadius: dot.size / 2,
            backgroundColor: `rgba(0,0,0,${dot.opacity})`,
          }}
        />
      ))}
    </View>
  );
}

function DarkInkOverlay() {
  return (
    <View
      style={[StyleSheet.absoluteFill, styles.darkOverlay]}
      pointerEvents="none"
    />
  );
}

export function PaperTexture() {
  const intensity = useSettingsStore((s) => s.paperIntensity);
  const darkInk = useSettingsStore((s) => s.darkInk);

  const grainOpacity = INTENSITY_OPACITY[intensity] ?? 0.07;

  return (
    <>
      {darkInk && <DarkInkOverlay />}
      <PaperGrain opacity={grainOpacity} />
    </>
  );
}

const styles = StyleSheet.create({
  darkOverlay: {
    backgroundColor: "rgba(0,0,0,0.85)",
  },
});
