import {
  Card,
  styled,
  Typography,
  CardMedia,
  CardMediaProps,
} from "@mui/material";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

interface CardImageProps extends CardMediaProps {
  isAdded: boolean;
}

export const Container = styled(Card, {
  shouldForwardProp: (prop) => prop !== "isHidden" && prop !== "hasError",
})<{ isHidden: boolean; hasError: boolean }>(({ isHidden, hasError }) => ({
  background: `linear-gradient(145deg, 
    var(--gradient-start) 0%, 
    var(--gradient-mid1) 30%, 
    var(--gradient-mid2) 70%, 
    var(--gradient-end) 100%)`,
  boxShadow: "0 0 10px var(--box-shadow-color)",
  transition: "all 0.3s ease",
  cursor: "pointer",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  overflow: "visible",

  minHeight: isHidden ? 200 : "auto",
  maxHeight: isHidden ? 200 : "auto",
  animation: hasError
    ? "shake 0.5s cubic-bezier(.36,.07,.19,.97) both"
    : "unset",

  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0 0 20px var(--box-shadow-hover-color)",
    background: `linear-gradient(145deg, 
      var(--hover-gradient-start) 0%,
      var(--hover-gradient-mid1) 30%, 
      var(--hover-gradient-mid2) 70%, 
      var(--hover-gradient-end) 100%)`,
  },
}));

export const CancelIcon = styled(CancelPresentationIcon)(() => ({
  position: "absolute",
  top: -15,
  right: -10,
  color: "var(--error-color)",
  width: 30,
  height: 30,
  zIndex: 2,
}));

export const Title = styled(Typography)(() => ({
  color: "var(--white)",
  fontWeight: 600,
  textShadow: "0 1px 2px var(--main-text-shadow)",
  textAlign: "center",
  paddingTop: 1,
}));

export const CardImage = styled(CardMedia, {
  shouldForwardProp: (prop) => prop !== "isAdded",
})<CardImageProps>(({ isAdded }) => ({
  width: "100%",
  height: isAdded ? 150 : 250,
  objectFit: "contain",
  objectPosition: "center",
  display: "block",
  backgroundColor: "var(--image-bg)",
}));
