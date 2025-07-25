import { FC, useState, MouseEvent } from "react";
import { CardContent, CardMedia, Stack, Typography } from "@mui/material";

import { HoveredPerk, SpecialCardProps } from "./types";
import { useCharacterStore } from "../../store/Character";
import { useSnackbar } from "../../contexts/Snackbar";
import { MAX_AMOUNT_PER_SPECIAL } from "./constants";
import { Stars } from "./components/Stars";
import { CancelIcon, Container, Title } from "./SpecialCard.styled";

export const SpecialCard: FC<SpecialCardProps> = ({
  removePerk,
  isAdded,
  onClick = () => {},
  isHidden,
  ...perkData
}) => {
  const {
    iconSource,
    title,
    getDescriptionBasedOnStars,
    selectedStars,

    type,
  } = perkData;

  const [hasError, setError] = useState(false);

  const [hoveredPerk, setHoveredPerk] = useState<HoveredPerk | null>(null);

  const { addPerk, selectedPerks } = useCharacterStore();

  const { showMessage } = useSnackbar();

  const handleAddPerk = () => {
    if (!isAdded) {
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

      if (specialScoreAmountForSameType >= MAX_AMOUNT_PER_SPECIAL) {
        showMessage("Спешиал параметр переполнен - максимально 15 очков");
        setError(true);
        return;
      }

      addPerk(perkData);
      removePerk(perkData.perkId);
    } else {
      onClick(perkData);
    }
  };

  const handleRemovePerk = (e: MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    e.preventDefault();

    removePerk(perkData.perkId);
  };

  return (
    <Container
      isHidden={Boolean(isHidden)}
      hasError={hasError}
      onClick={handleAddPerk}
    >
      <Stack height="100%" sx={{ overflow: isHidden ? "hidden" : "visible" }}>
        {isAdded && <CancelIcon onClick={handleRemovePerk} />}

        <Title gutterBottom variant="h5">
          {title}
        </Title>

        <CardMedia
          component="img"
          width="100%"
          height={isAdded ? 150 : 250}
          sx={{
            objectFit: "contain",
            objectPosition: "center",
            display: "block",
            backgroundColor: "rgba(0,0,0,0.05)",
          }}
          image={iconSource}
        />

        <CardContent sx={{ mb: "auto", p: 1 }}>
          <Typography
            variant="body1"
            color="rgba(255, 255, 255, 0.8)"
            textAlign="center"
            lineHeight={1.4}
          >
            {getDescriptionBasedOnStars(
              hoveredPerk ? hoveredPerk.index + 1 : selectedStars
            )}
          </Typography>
        </CardContent>

        <Stars
          isAdded={Boolean(isAdded)}
          setError={setError}
          removePerk={removePerk}
          setHoveredPerk={setHoveredPerk}
          hoveredPerk={hoveredPerk}
          {...perkData}
        />
      </Stack>
    </Container>
  );
};
