import React, { useState } from "react";
import { Button, Snackbar } from "@mui/material";

export default function PopUpMessage() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div class="bg-gray-900 flex items-center justify-center h-screen">
      <div>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Submit Application
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Thank you, we will review your application then get back to you."
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        />
      </div>
      <a href="dashboard" class="pl-5">
        <Button variant="contained" color="primary">
          Go back to Dashboard
        </Button>
      </a>
    </div>
  );
}
