import React, { useState } from "react";
import DashboardNavbar from "../../components/DashboardNavbar";

const countries = [
  "USA",
  "Canada",
  "Mexico",
  "Brazil",
  "Argentina",
  "Colombia",
];

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      name: "Joshua Slevi",
      amount: 10700,
      date: "2006-05-11",
      status: "Completed",
    },
    {
      id: 2,
      name: "Philip Gibson",
      amount: 1900,
      date: "2006-06-09",
      status: "Completed",
    },
    {
      id: 3,
      name: "Elisabeth Walder",
      amount: 1800,
      date: "2022-02-11",
      status: "Pending",
    },
  ]);

  const handleSendMoney = (event) => {
    event.preventDefault();

    const newTransaction = {
      id: transactions.length + 1,
      name: event.target.recipient.value,
      amount: parseInt(event.target.amount.value, 10),
      date: new Date().toISOString().split("T")[0],
      status: "Pending",
    };

    setTransactions([...transactions, newTransaction]);
  };

  return (
    <>
      <DashboardNavbar />
      <div className="px-4 py-4 mx-auto w-[80%]">
        <h1 className="text-2xl font-bold mb-4">Transaction History</h1>

        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Recipient</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="border px-4 py-2">{transaction.id}</td>
                <td className="border px-4 py-2">{transaction.name}</td>
                <td className="border px-4 py-2">{transaction.amount}</td>
                <td className="border px-4 py-2">{transaction.date}</td>
                <td className="border px-4 py-2">{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-xl font-bold mt-8 mb-4">Send Money</h2>

        <form onSubmit={handleSendMoney}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="recipient"
            >
              Recipient
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              id="recipient"
              name="recipient"
              type="text"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              id="amount"
              name="amount"
              type="number"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="amount"
            >
              Account Number
            </label>

            <input
              className="border border-gray-400 p-2 w-full"
              id="amount"
              name="amount"
              type="number"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="recipient"
            >
              Swift Code
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              id="recipient"
              name="recipient"
              type="text"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="recipient"
            >
              Country
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              id="recipient"
              name="recipient"
              type="text"
              required
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 rounded">
            Send Money
          </button>
        </form>
      </div>
    </>
  );
};
export default TransactionHistory;
