import {
  FC,
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from "react";
import { Snackbar as MuiSnackbar, Alert, AlertColor } from "@mui/material";

import { SnackbarContextType, SnackbarProps } from "./types";

const SnackbarContext = createContext<SnackbarContextType | null>(null);
const MIN_MESSAGE_DURATION = 3000;

export const SnackbarProvider: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<AlertColor>("info");

  const showMessage = (message: string, severity: AlertColor = "info") => {
    setMessage(message);
    setSeverity(severity);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <SnackbarContext.Provider value={{ showMessage }}>
      {children}

      <Snackbar
        open={open}
        message={message}
        severity={severity}
        onClose={handleClose}
      />
    </SnackbarContext.Provider>
  );
};

const Snackbar: FC<SnackbarProps> = ({ open, message, severity, onClose }) => (
  <MuiSnackbar
    open={open}
    autoHideDuration={MIN_MESSAGE_DURATION}
    onClose={onClose}
    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
  >
    <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
      {message}
    </Alert>
  </MuiSnackbar>
);

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);

  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }

  return context;
};
