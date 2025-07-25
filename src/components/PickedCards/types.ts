import { IPerk } from "../../types/Perk";

export interface PickedCardProps {
  pickedPerks: IPerk[];
  removePerk: (perk: IPerk) => void;
}
