import React, { useState } from "react";
import DashboardNavbar from "../../components/DashboardNavbar";

const SettingsPage = () => {
  const [show2FA, setShow2FA] = useState(false);
  const [showSupportKey, setShowSupportKey] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showSecondaryUsers, setShowSecondaryUsers] = useState(false);
  const [supportKey, setSupportKey] = useState("");

  const handleGenerateSupportKey = () => {
    setSupportKey(Math.random().toString(36).substring(2, 8).toUpperCase());
    setShowSupportKey(true);
  };

  return (
    <>
      <DashboardNavbar />
      <div class="flex h-screen">
        <div class="w-1/2 bg-gray-100 p-10 px-40">
          <h2 class="text-lg font-bold mb-5">Security</h2>
          <div class="mb-5">
            <h3 class="text-base font-medium mb-2">2FA Authentication</h3>
            {!show2FA ? (
              <button
                class="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={() => setShow2FA(true)}
              >
                Enable
              </button>
            ) : (
              <p>
                An OTP has been sent to your email address. <br />
                <br />
                Haven't received any email? <br />
                <br />
                Please contact Customer Support on the contact us page. Thank
                you
              </p>
            )}
          </div>
          <div class="mb-5">
            <h3 class="text-base font-medium mb-2">Username and Password</h3>
            <button
              class="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() =>
                alert("An OTP has been sent to your email address")
              }
            >
              Change
            </button>
          </div>
          <div>
            <h3 class="text-base font-medium mb-2">Support Key</h3>
            {!showSupportKey ? (
              <button
                class="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={handleGenerateSupportKey}
              >
                Generate
              </button>
            ) : (
              <div>
                <p class="mb-2">Your support key is: {supportKey}</p>
                <p class="text-sm text-gray-600">
                  Your support key is required when contacting Customer care or
                  Support.
                </p>
                <button
                  class="bg-blue-500 text-white py-2 px-4 rounded mt-5"
                  onClick={() => setShowSupportKey(false)}
                >
                  Go Back
                </button>
              </div>
            )}
          </div>
          <h2 class="text-lg font-bold mt-10 mb-5">Privacy</h2>
          <div class="mb-5">
            <h3 class="text-base font-medium mb-2">Account</h3>
            {!showAccount ? (
              <button
                class="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={() => setShowAccount(true)}
              >
                View
              </button>
            ) : (
              <div>
                <p class="mb-2">Account Type: Business</p>
                <p class="mb-2">Account Number: 123456789</p>
                <p class="mb-2">Status: Active</p>
                <p class="mb-2">Currency: Pounds</p>
                <button
                  class="bg-blue-500 text-white py-2 px-4 rounded mt-5"
                  onClick={() => setShowAccount(false)}
                >
                  Go Back
                </button>
              </div>
            )}
          </div>
        </div>
        <div class="w-1/2 bg-gray-100 p-10">
          <h2 class="text-lg font-bold mb-5">Manage Profiles</h2>
          <div>
            <h3 class="text-base font-medium mb-2">Secondary Users</h3>
            {!showSecondaryUsers ? (
              <button
                class="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={() => setShowSecondaryUsers(true)}
              >
                View
              </button>
            ) : (
              <div>
                <p class="mb-2">
                  There's no linked profile available at this moment
                </p>
                <button
                  class="bg-blue-500 text-white py-2 px-4 rounded mt-5"
                  onClick={() => setShowSecondaryUsers(false)}
                >
                  Go Back
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default SettingsPage;
