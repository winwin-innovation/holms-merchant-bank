import React, { useState } from "react";
import DashboardNavbar from "../../components/DashboardNavbar";
import DashboardFooter from "../../components/DashboardFooter";

const TransferFunds = () => {
  const [formData, setFormData] = useState({
    accountName: "",
    bankName: "",
    accountNumber: "",
    country: "",
    swiftCode: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});

  const [isProcessing, setIsProcessing] = useState(false);

  const countries = [
    "USA",
    "UK",
    "India",
    "Australia",
    "Potugal",
    "Poland",
    "Norway",
    "Netherlands",
    "Mexico",
    "Kuwait",
    "Italy",
    "Ireland",
    "Iceland",
    "Germany",
    "France",
    "Finland",
    "Georgia",
    "Estonia",
    "El Salvador",
    "Dominica",
    "Denmark",
    "Cyprus",
    "Croatia",
    "Cuba",
    "China",
    "Canada",
    "Belgium",
    "Argentina",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};
    if (!formData.accountName) {
      formErrors.accountName = "Account Name is required";
    }
    if (!formData.bankName) {
      formErrors.bankName = "Bank Name is required";
    }
    if (!formData.accountNumber) {
      formErrors.accountNumber = "Account Number is required";
    }
    if (!formData.country) {
      formErrors.country = "Country is required";
    }
    if (!formData.swiftCode) {
      formErrors.swiftCode = "Swift Code is required";
    }
    if (!formData.amount) {
      formErrors.amount = "Amount is required";
    }
    if (formData.amount && isNaN(formData.amount)) {
      formErrors.amount = "Amount must be a number";
    }

    setErrors(formErrors);

    if (!Object.keys(formErrors).length) {
      setIsProcessing(true);

      // Do API call or any other processing here
      async function transferFunds(data) {
        try {
          const response = await fetch(
            "https://your-api-endpoint.com/transfer-funds",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );
          const result = await response.json();
          return result;
        } catch (error) {
          console.error(error);
          return error;
        }
      }

      // ...

      setTimeout(() => {
        setIsProcessing(false);
        setFormData({
          accountName: "",
          bankName: "",
          accountNumber: "",
          country: "",
          swiftCode: "",
          amount: "",
        });
      }, 2000);
    }
  };

  return (
    <>
      <DashboardNavbar />
      <div className="text-center text-gray-800 py-10 font-bold text-2xl">
        <h1>Transfer Funds</h1>
      </div>
      <div className=" mx-auto w-[60%] p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="accountName">
              Account Name
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              id="accountName"
              type="text"
              name="accountName"
              value={formData.accountName}
              onChange={handleChange}
            />
            {errors.accountName && (
              <p className="text-red-500 text-xs italic">
                {errors.accountName}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="bankName">
              Bank Name
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              id="bankName"
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
            />
            {errors.bankName && (
              <p className="text-red-500 text-xs italic">{errors.bankName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="accountNumber">
              Account Number
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              id="accountNumber"
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
            />
            {errors.accountNumber && (
              <p className="text-red-500 text-xs italic">
                {errors.accountNumber}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="country">
              Country
            </label>
            <select
              className="border border-gray-400 p-2 w-full"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Choose Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && (
              <p className="text-red-500 text-xs italic">{errors.country}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="swiftCode">
              Swift Code
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              id="swiftCode"
              type="text"
              name="swiftCode"
              value={formData.swiftCode}
              onChange={handleChange}
            />
            {errors.swiftCode && (
              <p className="text-red-500 text-xs italic">{errors.swiftCode}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="amount">
              Amount
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              id="amount"
              type="text"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
            {errors.amount && (
              <p className="text-red-500 text-xs italic">{errors.amount}</p>
            )}
          </div>
          <button
            className={`          bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            type="submit"
          >
            Send
          </button>
          {isProcessing && (
            <p className="text-indigo-500 text-xs italic">
              Amount is being processed...
            </p>
          )}
        </form>
      </div>
      <DashboardFooter />
    </>
  );
};

export default TransferFunds;
