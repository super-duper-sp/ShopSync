import React from "react";
import EntryDailyTransaction from "../components/DailyTransactionsPage/EntryDailyTransaction";
import TransactionsTable from "../components/DailyTransactionsPage/TransactionsTable";

const DailyTransactionPage = () => {
  const dailyEntries = [
    {
      date: "2024-07-20",
      buyAmount: 100,
      sellAmount: 50,
      buyNotes: "Purchased tech stocks",
      sellNotes: "Sold old inventory",
      user: "John Doe",
    },
    {
      date: "2024-07-21",
      buyAmount: 200,
      sellAmount: 100,
      buyNotes: "Bought new equipment",
      sellNotes: "Cleared seasonal stock",
      user: "Jane Smith",
    },
    {
      date: "2024-07-22",
      buyAmount: 150,
      sellAmount: 75,
      buyNotes: "Invested in mutual funds",
      sellNotes: "Sold excess supplies",
      user: "Alice Johnson",
    },
    {
      date: "2024-07-23",
      buyAmount: 250,
      sellAmount: 120,
      buyNotes: "Purchased real estate",
      sellNotes: "Sold old machinery",
      user: "Bob Brown",
    },
  ];

  return (
    <>
      <EntryDailyTransaction />

      <TransactionsTable TABLE_ROWS={dailyEntries || []} />
    </>
  );
};

export default DailyTransactionPage;
