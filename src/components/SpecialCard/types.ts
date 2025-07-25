import { IPerk } from "../../types/Perk";

export interface SpecialCardProps extends IPerk {
  removePerk: (id: string) => void;
  isAdded?: boolean;
  onClick?: (perk: IPerk) => void;
  isHidden?: boolean;
}

export interface HoveredPerk {
  index: number;
  perk: IPerk;
}
