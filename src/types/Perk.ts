import { SPECIALS } from "../entities/Specials";

export interface IPerk {
  perkId: string;
  totalAmountOfStars: number;
  cost: number;
  selectedStars: number;
  title: string;
  levelRequirment: number;
  iconSource: string;
  getDescriptionBasedOnStars: (amountOfStars: number) => string;
  getCustomDescription?: string;
  perkData?: { [key: string]: number };
  type: SPECIALS;
  order: number;
  initialCost?: number;
}

export interface PerkStoreData {
  perkList: IPerk[];
  type: SPECIALS;
  removePerk: (perkId: string) => void;
  addPerk: (perk: IPerk) => void;
}
