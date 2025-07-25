import { FC } from "react";
import { Box, Tooltip } from "@mui/material";

import { ReactComponent as Icon } from "../../../../assets/star.svg";
import { useCharacterStore } from "../../../../store/Character";
import { useSnackbar } from "../../../../contexts/Snackbar";
import { MAX_AMOUNT_PER_SPECIAL } from "../../constants";
import { StarsProps } from "./types";
import { LevelRequirementRoot, LevelText } from "./Stars.styled";

export const Stars: FC<StarsProps> = ({
  isAdded,
  setError,
  removePerk,
  setHoveredPerk,
  hoveredPerk,
  ...perkData
}) => {
  const { addPerk, updateAmountOfStars, selectedPerks } = useCharacterStore();
  const { showMessage } = useSnackbar();

  const { totalAmountOfStars, type, selectedStars, perkId, levelRequirment } =
    perkData;

  const getFilledState = (index: number) => {
    if (isAdded && hoveredPerk) {
      return index + 1 <= (hoveredPerk ? hoveredPerk?.index : 0)
        ? "gold"
        : "#fff";
    }

    return index + 1 <= (hoveredPerk ? hoveredPerk?.index : 0) ||
      index + 1 <= selectedStars
      ? "gold"
      : "#fff";
  };

  const handleManipulateStar = (index: number) => {
    if (!isAdded) {
      const specialScoreAmountForSameType = selectedPerks.reduce(
        (acc, item) => {
          if (item.type === type) {
            acc += item.selectedStars;
          }
          return acc;
        },
        0
      );

      if (specialScoreAmountForSameType + index + 1 > MAX_AMOUNT_PER_SPECIAL) {
        showMessage("Спешиал параметр переполнен - максимально 15 очков");
        setError(true);
        return;
      }

      addPerk(perkData, index + 1);
      removePerk(perkData.perkId);
    } else {
      const specialScoreAmountForSameType = selectedPerks.reduce(
        (acc, item) => {
          if (item.type === type) {
            if (item?.initialCost) {
              acc += item.initialCost + item.selectedStars - 1;
            } else {
              acc += item.selectedStars;
            }
          }
          return acc;
        },
        0
      );

      if (specialScoreAmountForSameType + index > MAX_AMOUNT_PER_SPECIAL) {
        showMessage("Спешиал параметр переполнен - максимально 15 очков");
        setError(true);
        return;
      }

      updateAmountOfStars(index + 1, perkId);
    }
  };

  return (
    <Box
      mt="auto"
      justifyContent="center"
      mb={1}
      display="flex"
      position="relative"
    >
      <Tooltip title="Требование к уровню">
        <LevelRequirementRoot isAdded={isAdded}>
          <LevelText variant="body1">{levelRequirment}</LevelText>
        </LevelRequirementRoot>
      </Tooltip>

      {new Array(totalAmountOfStars).fill(null).map((_, index) => (
        <Box
          position="relative"
          zIndex={500}
          sx={{ "&:hover": { "& svg": { color: "gold !important" } } }}
          onPointerEnter={() => setHoveredPerk({ index, perk: perkData })}
          onClick={(e) => {
            e.stopPropagation();
            handleManipulateStar(index);
          }}
          key={index}
          onPointerLeave={() => setHoveredPerk(null)}
        >
          <Icon
            style={{
              height: "40px",
              width: "40px",
              color: getFilledState(index),
            }}
          />
        </Box>
      ))}
    </Box>
  );
};
