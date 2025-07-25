import React from "react";
import ReactDOM from "react-dom/client";

import { SnackbarProvider } from "./contexts/Snackbar";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);
