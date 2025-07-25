import { FC, useState } from "react";
import { Stack } from "@mui/material";

import { MIN_CARD_HEIGHT, OFFSET } from "./constants";
import { SpecialCard } from "../SpecialCard";
import { PickedCardProps } from "./types";
import { IPerk } from "../../types/Perk";
import { PickedCardContainer } from "./PickedCards.styled";

export const PickedCards: FC<PickedCardProps> = ({
  removePerk,
  pickedPerks,
}) => {
  const [selectedCard, setSelectedCard] = useState<IPerk | null>(null);

  const handleCardClick = (perk: IPerk) => {
    setSelectedCard(selectedCard?.perkId === perk.perkId ? null : perk);
  };

  const cardHeight =
    pickedPerks.length === 0
      ? 0
      : MIN_CARD_HEIGHT + OFFSET * pickedPerks.length;

  return (
    <Stack
      position="relative"
      pt={1 * pickedPerks.length || 1}
      height={cardHeight}
    >
      {pickedPerks.map((perk, index, self) => {
        const isLastItem = index + 1 === self.length;
        const isPerkSelected = selectedCard?.perkId === perk.perkId;
        const isCardHidden =
          self.length > 1 &&
          selectedCard?.perkId !== perk.perkId &&
          !isLastItem;

        return (
          <PickedCardContainer
            key={perk.perkId}
            isPerkSelected={isPerkSelected}
            index={index}
          >
            <SpecialCard
              {...perk}
              isHidden={isCardHidden}
              onClick={handleCardClick}
              removePerk={() => removePerk(perk)}
              isAdded
            />
          </PickedCardContainer>
        );
      })}
    </Stack>
  );
};
