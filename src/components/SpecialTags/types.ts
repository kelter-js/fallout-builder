import { SPECIALS } from "../../entities/Specials";

export interface SpecialTagsProps {
  selectedTag: SPECIALS;
  setSelectedTag: (tag: SPECIALS) => void;
}
