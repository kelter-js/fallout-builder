import { SPECIALS } from "../entities/Specials";

export interface Build {
  type: SPECIALS;
  selectedStars: number;
  perkId: string;
}

export interface SavedBuild {
  buildName: string;
  perksList: Build[];
}
