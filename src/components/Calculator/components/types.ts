import { SPECIALS_ABBREVIATION } from "../../../entities/Specials";
import { PickedCardProps } from "../../PickedCards/types";

export interface SpecialNameProps extends Omit<PickedCardProps, "type"> {
  name: SPECIALS_ABBREVIATION;
}
