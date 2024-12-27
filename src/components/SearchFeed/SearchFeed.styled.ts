import { styled } from "@mui/material";

export const Title = styled("h2")(() => ({
  margin: 0,
  fontFamily: "var(--font-family)",
  fontWeight: 700,
  fontSize: "18px",

  lineHeight: "23px",
  color: "var(--white)",
}));

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3.5),
  marginBottom: theme.spacing(3),
}));
