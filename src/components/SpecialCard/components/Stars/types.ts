import { Dispatch, SetStateAction } from "react";

import { IPerk } from "../../../../types/Perk";
import { HoveredPerk } from "../../types";

export interface StarsProps extends IPerk {
  isAdded: boolean;
  setError: Dispatch<SetStateAction<boolean>>;
  removePerk: (perkId: string) => void;
  setHoveredPerk: Dispatch<SetStateAction<HoveredPerk | null>>;
  hoveredPerk: HoveredPerk | null;
}
