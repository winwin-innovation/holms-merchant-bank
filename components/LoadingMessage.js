import React, { useState, useEffect } from "react";
import { LinearProgress, Snackbar } from "@mui/material";

export default function LoadingMesage() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setOpen(false);
    }, 120000);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "timeout") {
      setOpen(false);
    }
  };

  return (
    <div>
      <LinearProgress color="secondary" />
      <Snackbar
        open={open}
        autoHideDuration={120000}
        onClose={handleClose}
        message="Do not fall for phishing links"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </div>
  );
}
