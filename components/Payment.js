import React, { useState } from "react";
import { Collapse, IconButton, Snackbar, Button } from "@mui/material";

export default function Payment() {
  // Credit Card
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);

    if (event.target.value.length > 16) {
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <body class="flex items-center justify-center w-screen h-screen bg-gray-100 text-gray-800 ">
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full max-w-screen-lg">
        <div class="lg:col-span-2">
          <h2 class="text-sm font-medium">Enter current Credit Card details</h2>
          <div class="bg-white rounded mt-4 shadow-lg">
            <div class="flex items-center px-8 py-5">
              <input
                class="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100"
                type="radio"
              />
              <label class="text-sm font-medium ml-4">PayPal</label>
            </div>
            <div class="border-t">
              <div class="flex items-center px-8 py-5">
                <input
                  class="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100 bg-blue-600"
                  type="radio"
                />
                <label class="text-sm font-medium ml-4">Credit Card</label>
              </div>
              <div class="grid grid-cols-2 gap-4 px-8 pb-8">
                <div class="col-span-2">
                  <label class="text-xs font-semibold" for="cardNumber">
                    Card number
                  </label>
                  <input
                    class="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    onChange={handleInput}
                  />
                  <Collapse in={open}>
                    <Snackbar
                      open={open}
                      autoHideDuration={6000}
                      onClose={handleClose}
                      message="Invalid input, card number should not exceed 16 characters"
                      action={
                        <IconButton
                          size="small"
                          aria-label="close"
                          color="inherit"
                          onClick={handleClose}
                        >
                          x
                        </IconButton>
                      }
                    />
                  </Collapse>
                </div>
                <div class="">
                  <label class="text-xs font-semibold" for="cardNumber">
                    Expiry Date
                  </label>
                  <input
                    class="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                    type="text"
                    placeholder="MM/YY"
                  />
                </div>
                <div class="">
                  <label class="text-xs font-semibold" for="cardNumber">
                    CVC/CVV
                  </label>
                  <input
                    class="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                    type="password"
                    placeholder="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-sm font-medium">USEFUL INFORMATION</h2>
          <div class="bg-white rounded mt-4 shadow-lg py-6">
            <div class="px-8 mt-4  pt-4">
              <div class="flex items-end justify-between">
                We wanted to inform you that with updating your credit card CVV
                our system requires a couple of weeks to process and fully
                update your credit card information. Thank you.
              </div>
            </div>
            <div class="flex items-center px-8 mt-8">
              <input id="termsConditions" type="checkbox" />
              <label class="text-xs text-gray-500 ml-2" for="termsConditions">
                I agree to the terms and conditions.
              </label>
            </div>
            <div class="flex flex-col px-8 pt-4">
              <a href="popupmessage">
                <button class="flex items-center justify-center bg-blue-600 text-sm font-medium w-full h-10 rounded text-blue-50 hover:bg-blue-700">
                  Send for Review
                </button>
              </a>
              <a href="dashboard" class="text-center">
                <button class="text-xs text-blue-500 mt-3 underline">
                  Back to Dashboard
                </button>
              </a>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2">
          <h2 class="text-sm font-medium">Update New CVV</h2>
          <div class="bg-white rounded mt-4 shadow-lg">
            <div class="border-t">
              <div class="flex items-center px-8 py-5">
                <input
                  class="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100 bg-blue-600"
                  type="radio"
                />
                <label class="text-sm font-medium ml-4">Credit Card</label>
              </div>
              <div class="grid grid-cols-2 gap-4 px-8 pb-8">
                <div class="col-span-2">
                  <label class="text-xs font-semibold" for="cardNumber">
                    Card number
                  </label>
                  <input
                    class="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    onChange={handleInput}
                  />
                  <Collapse in={open}>
                    <Snackbar
                      open={open}
                      autoHideDuration={6000}
                      onClose={handleClose}
                      message="Invalid input, card number should not exceed 16 characters"
                      action={
                        <IconButton
                          size="small"
                          aria-label="close"
                          color="inherit"
                          onClick={handleClose}
                        >
                          x
                        </IconButton>
                      }
                    />
                  </Collapse>
                </div>
                <div class="">
                  <label class="text-xs font-semibold" for="cardNumber">
                    Expiry Date
                  </label>
                  <input
                    class="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                    type="text"
                    placeholder="MM/YY"
                  />
                </div>
                <div class="">
                  <label class="text-xs font-semibold" for="cardNumber">
                    CVC/CVV
                  </label>
                  <input
                    class="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                    type="password"
                    placeholder="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
