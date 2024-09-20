export interface IPerk {
  perkId: string;
  totalAmountOfStars: number;
  cost: number;
  initialCost?: number;
  selectedStars: number;
  description: string;
  title: string;
  levelRequirment: number;
  iconSource: string;
  modificator: number;
  modificatorStep: number;
  //if this modificator exists in our model and perk have max amount of stars - use this value instead of calculation
  maxModificatorStep?: number;
  sideModificator?: number;
  sideModificatorStep?: number;
  getDescriptionBasedOnStars?: (amountOfStars: number) => string;
  getCustomDescription?: string;
  perkData?: { [key: string]: number };
}
