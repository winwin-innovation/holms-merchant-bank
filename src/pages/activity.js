import React, { useState } from "react";
import DashboardNavbar from "../../components/DashboardNavbar";

const transactions = [
  {
    id: 1,
    date: "2007-12-27",
    year: 2007,
    amount: -91500,
    recipient: "Bryan Bradford",
  },
  {
    id: 2,
    date: "2007-12-21",
    year: 2022,
    amount: -7200,
    recipient: "Frank Cross",
  },
  {
    id: 3,
    date: "2007-11-03",
    year: 2008,
    amount: -1300,
    recipient: "Roberta Smith",
  },
  {
    id: 4,
    date: "2007-09-15",
    year: 2007,
    amount: -10400,
    recipient: "Janet Kirk",
  },
  {
    id: 5,
    date: "2007-10-19",
    year: 2007,
    amount: -10500,
    recipient: "Sarah Legge",
  },
  {
    id: 6,
    date: "2007-07-03",
    year: 2007,
    amount: -32600,
    recipient: "Andrew Newman",
  },
  {
    id: 7,
    date: "2007-06-09",
    year: 2020,
    amount: -11700,
    recipient: "Katherine Hartley",
  },
  {
    id: 8,
    date: "2006-11-01",
    year: 2020,
    amount: -1800,
    recipient: "Elisabeth Walder",
  },
  {
    id: 9,
    date: "2006-06-09",
    year: 2006,
    amount: -19000,
    recipient: "Philip Gibson",
  },
  {
    id: 10,
    date: "2006-05-11",
    year: 2006,
    amount: -107000,
    recipient: "Joshua Slevi",
  },
];

const TransactionHistory = () => {
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");
  const sortedTransactions = [...transactions].sort((a, b) => {
    if (sortBy === "date") {
      return sortOrder === "asc"
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date);
    } else {
      return sortOrder === "asc" ? a.year - b.year : b.year - a.year;
    }
  });

  return (
    <>
      <div>
        <DashboardNavbar />
        <div class="mb-4 flex justify-between mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6">
          <h2 class="text-2xl font-bold">Transaction History</h2>
          <div class="flex items-center">
            <label class="mr-2 font-medium" htmlFor="sort-by">
              Sort by:
            </label>
            <select
              class="form-select mr-4"
              id="sort-by"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="date">Date</option>
              <option value="year">Year</option>
            </select>
            <label class="mr-2 font-medium" htmlFor="sort-order">
              Sort order:
            </label>
            <select
              class="form-select"
              id="sort-order"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
        <table class="w-[80%] text-left table-collapse mx-auto py-6">
          <thead>
            <tr>
              <th class="px-4 py-4">Date</th>
              <th class="px-4 py-4">Amount</th>
              <th class="px-4 py-4">Recipient</th>
            </tr>
          </thead>
          <tbody>
            {sortedTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td class="px-4 py-4 bg-gray-100">{transaction.date}</td>
                <td class="px-4 py-4 bg-red-100">{transaction.amount}</td>
                <td class="px-4 py-4 bg-green-100">{transaction.recipient}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionHistory;
