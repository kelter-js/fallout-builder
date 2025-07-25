import { FC, useMemo } from "react";
import { Stack } from "@mui/material";

import { SPECIALS, SPECIALS_ABBREVIATION } from "../../entities/Specials";
import { useCharacterStore } from "../../store/Character";
import { Title } from "./Calculator.styled";
import { SpecialName } from "./components";
import { CalculatorProps } from "./types";
import { IPerk } from "../../types/Perk";

type PerkMap = Record<SPECIALS, IPerk[]>;

export const Calculator: FC<CalculatorProps> = ({
  selectedPerks = [],
  addPerk,
}) => {
  const {
    Strength: strength = [],
    Perception: perception = [],
    Endurance: endurance = [],
    Charisma: charisma = [],
    Intelligence: intelligence = [],
    Agility: agility = [],
    Luck: luck = [],
  } = useMemo(
    () =>
      selectedPerks.reduce<PerkMap>((acc, item) => {
        if (acc[item.type]) {
          acc[item.type].push(item);
        } else {
          acc[item.type] = [item];
        }

        return acc;
      }, {} as PerkMap),
    [selectedPerks.length]
  );

  const { deleteCharacterPerk } = useCharacterStore();

  const removePerk = (perk: IPerk) => {
    deleteCharacterPerk(perk.perkId);
    addPerk[perk.type](perk);
  };

  return (
    <Stack>
      <Stack mb={2} direction="row" gap={4}>
        <SpecialName
          name={SPECIALS_ABBREVIATION.STRENGTH}
          pickedPerks={strength}
          removePerk={removePerk}
        />

        <SpecialName
          name={SPECIALS_ABBREVIATION.PERCEPTION}
          pickedPerks={perception}
          removePerk={removePerk}
        />

        <SpecialName
          name={SPECIALS_ABBREVIATION.ENDURANCE}
          pickedPerks={endurance}
          removePerk={removePerk}
        />

        <SpecialName
          name={SPECIALS_ABBREVIATION.CHARISMA}
          pickedPerks={charisma}
          removePerk={removePerk}
        />

        <SpecialName
          name={SPECIALS_ABBREVIATION.INTELLIGENCE}
          pickedPerks={intelligence}
          removePerk={removePerk}
        />

        <SpecialName
          name={SPECIALS_ABBREVIATION.AGILITY}
          pickedPerks={agility}
          removePerk={removePerk}
        />

        <SpecialName
          name={SPECIALS_ABBREVIATION.LUCK}
          pickedPerks={luck}
          removePerk={removePerk}
        />
      </Stack>

      <Title>Create a Build</Title>
    </Stack>
  );
};

export default Calculator;
