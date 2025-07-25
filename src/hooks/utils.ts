import { IPerk } from "../types/Perk";

interface RestorePerkArguments {
  perkList: IPerk[];
  perkId: string;
  selectedStars: number;
  addPerk: (perk: IPerk, stars?: number) => void;
  remove: (perkId: string) => void;
}

export const restorePerk = ({
  perkList,
  perkId,
  selectedStars,
  addPerk,
  remove,
}: RestorePerkArguments) => {
  const perkData = perkList.find((subPerk) => subPerk.perkId === perkId);

  if (perkData) addPerk(perkData, selectedStars);
  remove(perkId);
};
