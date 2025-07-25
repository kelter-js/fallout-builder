import { Button, styled, TextField } from "@mui/material";

export const ControlButton = styled(Button)(({ theme: { spacing } }) => ({
  borderRadius: spacing(1),
  padding: "0px 10px",
  background: "var(--tag-color)",
  height: "40px",

  "&:hover": {
    opacity: 0.7,
    background: "var(--tag-color)",
  },
}));

export const BuildNameField = styled(TextField)(({ theme: { spacing } }) => ({
  backgroundColor: "var(--tag-color)",
  borderRadius: spacing(1),

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

export const LoadBuildButton = styled(Button)(() => ({
  "&:disabled": {
    color: "var(--light-blue) !important",
    opacity: 0.5,
  },

  width: "100%",
  justifyContent: "start",
}));
