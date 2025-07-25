import { styled, TextField } from "@mui/material";

export const Title = styled("h2")(() => ({
  margin: 0,
  fontFamily: "var(--font-family)",
  fontWeight: 700,
  fontSize: "18px",

  lineHeight: "23px",
  color: "var(--white)",
}));

export const Container = styled("div")(({ theme: { spacing } }) => ({
  display: "flex",
  flexDirection: "column",
  gap: spacing(3.5),
  marginBottom: spacing(3),
}));

export const Input = styled(TextField)(({ theme: { spacing } }) => ({
  backgroundColor: "var(--tag-color)",
  borderRadius: spacing(1),
  marginTop: spacing(3),
  input: {
    fontFamily: "var(--font-family)",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    color: "var(--text-color)",

    "&::placeholder": {
      fontFamily: "var(--font-family)",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      color: "var(--text-color)",
    },
  },
}));
