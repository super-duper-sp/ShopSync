// DailyTransactionPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EntryDailyTransaction from '../components/DailyTransactionsPage/EntryDailyTransaction';
import TransactionsTable from '../components/DailyTransactionsPage/TransactionsTable';
import { fetchDailyTransactions } from '../features/DailyTransaction/DailyTransactionAction';

const DailyTransactionPage = () => {
  const dispatch = useDispatch();
  const { transactions, loading, error } = useSelector((state) => state.dailyTransactions);

  useEffect(() => {
    dispatch(fetchDailyTransactions());
  }, [dispatch]);

  return (
    <div className="px-4 py-4">
      <h1>Daily Transactions</h1>
      <EntryDailyTransaction />
      <div className="px-4 py-4">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <TransactionsTable TABLE_ROWS={transactions || []} />
      </div>
    </div>
  );
};

export default DailyTransactionPage;