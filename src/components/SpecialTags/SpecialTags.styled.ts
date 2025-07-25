import { Button, styled, Typography } from "@mui/material";

export const TagList = styled("ul")(({ theme }) => ({
  display: "flex",
  margin: 0,
  padding: 0,
  listStyle: "none",
  gap: theme.spacing(1.5),
}));

export const Tag = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive?: boolean }>(({ theme, isActive }) => ({
  padding: `${theme.spacing(0.7)} ${theme.spacing(2)}`,
  background: "var(--tag-color)",
  opacity: isActive ? 0.7 : 1,

  "&:hover": {
    opacity: isActive ? 0.6 : 0.7,
    background: "var(--tag-hover)",
  },
}));

export const TagText = styled(Typography)(() => ({
  fontFamily: "var(--font-family)",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "21px",
  color: "var(--tag-text)",
}));
