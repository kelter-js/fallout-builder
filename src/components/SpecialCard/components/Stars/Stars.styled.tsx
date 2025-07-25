import { styled, Typography } from "@mui/material";

export const LevelRequirementRoot = styled("div", {
  shouldForwardProp: (prop) => prop !== "isAdded",
})<{ isAdded?: boolean }>(({ isAdded }) => ({
  position: "absolute",
  left: isAdded ? 10 : 16,
  top: isAdded ? 8 : 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: isAdded ? 30 : 50,
  height: isAdded ? 30 : 44,
  backgroundColor: "var(--white)",

  border: "3px solid var(--level-color)",
  borderRadius: "4px",
  boxShadow: "0 0 5px var(--level-glow)",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 2,
    left: 2,
    right: 2,
    bottom: 2,
    border: "1px solid var(--level-border-inner)",
    borderRadius: "2px",
  },
}));

export const LevelText = styled(Typography)({
  color: "var(--level-color)",
  fontWeight: "bold",
  fontSize: "1.2rem",
  textShadow: "0 0 3px var(--level-text-shadow)",
  lineHeight: 1,
});
