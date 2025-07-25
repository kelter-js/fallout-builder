import { AlertColor } from "@mui/material";

export interface SnackbarContextType {
  showMessage: (message: string, severity?: AlertColor) => void;
}

export interface SnackbarProps {
  open: boolean;
  message: string;
  severity: AlertColor;
  onClose: VoidFunction;
}
