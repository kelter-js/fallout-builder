import { FC } from "react";
import { IPerk } from "../../types/Perk";
import { Card } from "./PickedCard.styled";
import { Typography } from "@mui/material";

export const PickedCard: FC<IPerk> = ({
  perkId,
  totalAmountOfStars,
  cost,
  initialCost,
  selectedStars,
  description,
  title,
  levelRequirment,
  iconSource,
  modificator,
  modificatorStep,
  //if this modificator exists in our model and perk have max amount of stars - use this value instead of calculation
  maxModificatorStep,
  sideModificator,
  sideModificatorStep,
  getDescriptionBasedOnStars,
  getCustomDescription,
  perkData,
}) => {
  return (
    <Card>
      <Typography>{title}</Typography>
      <img src={iconSource} />
      <Typography>{description}</Typography>
    </Card>
  );
};
