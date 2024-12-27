import { styled } from "@mui/material";

export const InnerContainer = styled("main")(({ theme }) => ({
  maxWidth: "75vw",
  margin: "0 auto",
  marginTop: theme.spacing(2.5),
  padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
}));
