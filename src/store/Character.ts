import { create } from "zustand";

import { DEFAULT_AMOUNT_OF_STARS } from "./constants";
import { IPerk } from "../types/Perk";

export const useCharacterStore = create<{
  selectedPerks: IPerk[];
  updateAmountOfStars: (stars: number, id: string) => void;
  addPerk: (perk: IPerk, stars?: number) => void;
  deleteCharacterPerk: (perkId: string) => void;
}>((set) => ({
  selectedPerks: [],
  updateAmountOfStars: (amountOfStars, id) =>
    set((state) => {
      const perkData = state.selectedPerks.find((perk) => perk.perkId === id);

      if (perkData) {
        perkData.selectedStars = amountOfStars * perkData.cost;
      }

      return { ...state, selectedPerks: [...state.selectedPerks] };
    }),
  addPerk: (perk, stars = DEFAULT_AMOUNT_OF_STARS) =>
    set((state) => {
      const perkData = { ...perk };

      if (stars) {
        perkData.selectedStars = stars * perkData.cost;
      }

      state.selectedPerks.push(perkData);

      return { ...state };
    }),
  deleteCharacterPerk: (perkId) =>
    set((state) => ({
      ...state,
      selectedPerks: state.selectedPerks.filter(
        (perk) => perk.perkId !== perkId
      ),
    })),
}));
