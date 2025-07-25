import { IPerk } from "../../types/Perk";

export interface CalculatorProps {
  selectedPerks: IPerk[];
  addPerk: { [key: string]: (perk: IPerk) => void };
}
