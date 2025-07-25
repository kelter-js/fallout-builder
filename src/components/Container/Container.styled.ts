import { styled } from "@mui/material";

export const InnerContainer = styled("main")(({ theme }) => ({
  maxWidth: "90vw",
  minHeight: "72vh",
  margin: "0 auto",
  marginTop: theme.spacing(2.5),
  padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
}));
