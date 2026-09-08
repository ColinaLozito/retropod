import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type PaperIntensity = "bajo" | "medio" | "alto";
export type FontStyle = "clasico" | "negrita";
export type EqPreset = "acustico" | "vinilo" | "calido" | "plano";

interface SettingsStore {
  // E-Ink Display
  paperIntensity: PaperIntensity;
  darkInk: boolean;
  fontStyle: FontStyle;

  // Audio Engine
  flacEnabled: boolean;
  crossfadeEnabled: boolean;
  eqPreset: EqPreset;

  // Actions
  setPaperIntensity: (v: PaperIntensity) => void;
  setDarkInk: (v: boolean) => void;
  setFontStyle: (v: FontStyle) => void;
  setFlacEnabled: (v: boolean) => void;
  setCrossfadeEnabled: (v: boolean) => void;
  setEqPreset: (v: EqPreset) => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      // Defaults
      paperIntensity: "medio",
      darkInk: false,
      fontStyle: "negrita",
      flacEnabled: true,
      crossfadeEnabled: false,
      eqPreset: "vinilo",

      // Actions
      setPaperIntensity: (v) => set({ paperIntensity: v }),
      setDarkInk: (v) => set({ darkInk: v }),
      setFontStyle: (v) => set({ fontStyle: v }),
      setFlacEnabled: (v) => set({ flacEnabled: v }),
      setCrossfadeEnabled: (v) => set({ crossfadeEnabled: v }),
      setEqPreset: (v) => set({ eqPreset: v }),
    }),
    {
      name: "settings-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
