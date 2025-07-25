import { styled, Stack } from "@mui/material";

import { OFFSET } from "./constants";

export const Card = styled("div")`
  display: flex;
  flex-direction: column;
  width: 160px;
`;

export const PickedCardContainer = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "isPerkSelected" && prop !== "index",
})<{ isPerkSelected: boolean; index: number }>(({ isPerkSelected, index }) => ({
  position: "absolute",
  zIndex: isPerkSelected ? 99999 : 1 + index + 1,
  top: index === 0 ? 16 : OFFSET * index,
  transition: " transform 0.2s ease, z-index 0.2s ease",
  transform: isPerkSelected ? "translateY(-40px)" : "translateY(0)",
  willChange: "transform, z-index",
}));
