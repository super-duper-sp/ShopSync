import { createSlice } from '@reduxjs/toolkit';
import {
  addDailyTransaction,
  fetchDailyTransactions,
  updateDailyTransaction,
  deleteDailyTransaction,
} from './DailyTransactionAction';

const initialState = {
    transactions: [],
    currentPage: 1,
    totalPages: 1,
    totalTransactions: 0,
    loading: false,
    error: null,
  };
  

  const dailyTransactionSlice = createSlice({
    name: 'dailyTransactions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        // Add Daily Transaction
        .addCase(addDailyTransaction.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(addDailyTransaction.fulfilled, (state, action) => {
          state.loading = false;
          state.transactions.push(action.payload);
        })
        .addCase(addDailyTransaction.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        // Fetch Daily Transactions
        .addCase(fetchDailyTransactions.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchDailyTransactions.fulfilled, (state, action) => {
          state.loading = false;
          state.transactions = action.payload.data; // Adjust this to match your API response structure
          state.currentPage = action.payload.page;
          state.totalPages = action.payload.totalPages;
          state.totalTransactions = action.payload.total;
        })
        .addCase(fetchDailyTransactions.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        // Update Daily Transaction
        .addCase(updateDailyTransaction.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(updateDailyTransaction.fulfilled, (state, action) => {
          state.loading = false;
          const index = state.transactions.findIndex(transaction => transaction._id === action.payload._id);
          if (index !== -1) {
            state.transactions[index] = action.payload;
          }
        })
        .addCase(updateDailyTransaction.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        // Delete Daily Transaction
        .addCase(deleteDailyTransaction.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(deleteDailyTransaction.fulfilled, (state, action) => {
          state.loading = false;
          state.transactions = state.transactions.filter(transaction => transaction._id !== action.payload);
        })
        .addCase(deleteDailyTransaction.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  export default dailyTransactionSlice.reducer;
  

