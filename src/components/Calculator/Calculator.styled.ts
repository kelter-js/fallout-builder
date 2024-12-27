import { styled } from "@mui/material";

export const Title = styled("h1")(({ theme }) => ({
  margin: 0,
  marginBottom: theme.spacing(3.5),
  fontFamily: "var(--font-family)",
  fontWeight: 700,
  fontSize: "32px",

  lineHeight: "40px",
  color: "var(--white)",
}));
