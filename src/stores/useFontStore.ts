import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type FontOption = "indie" | "caveat" | "shadows";

export const FONT_MAP: Record<FontOption, string> = {
  indie: "IndieFlower_400Regular",
  caveat: "Caveat_400Regular",
  shadows: "ShadowsIntoLight_400Regular",
};

interface FontStore {
  selectedFont: FontOption;
  setSelectedFont: (font: FontOption) => void;
  getFontFamily: () => string;
}

export const useFontStore = create<FontStore>()(
  persist(
    (set, get) => ({
      selectedFont: "indie",
      setSelectedFont: (font: FontOption) => set({ selectedFont: font }),
      getFontFamily: () => FONT_MAP[get().selectedFont],
    }),
    {
      name: "font-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
