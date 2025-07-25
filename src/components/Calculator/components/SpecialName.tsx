import { FC } from "react";
import { Stack, Typography } from "@mui/material";

import { SpecialNameProps } from "./types";
import { PickedCards } from "../../PickedCards";

export const SpecialName: FC<SpecialNameProps> = ({
  pickedPerks,
  removePerk,
  name,
}) => (
  <Stack width="100%">
    <Typography
      fontFamily="var(--font-family)"
      textAlign="center"
      fontSize={48}
      lineHeight="40px"
      color="var(--white)"
    >
      {name}
    </Typography>
    <PickedCards pickedPerks={pickedPerks} removePerk={removePerk} />
  </Stack>
);
