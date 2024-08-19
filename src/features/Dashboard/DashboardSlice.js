import { createSlice } from '@reduxjs/toolkit';
import { 
    fetchOfflineSalesAmount,
    fetchOfflineSalesAmountYearly,
    fetchOfflineSalesAmountMonthlyYearly,
    fetchTotalRevenue,
    fetchLowestMonthlySales,
    fetchHighestMonthlySales,
    fetchAverageSales  // Importing the fetchAverageSales action
} from './DashboardAction';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    offlineSales: {},
    yearlySales: 0,
    totalRevenue: 0,
    monthlySales: {},
    highestMonthlySales: {},
    lowestMonthlySales: {},
    averageSales: {}, // Initial state for average sales
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfflineSalesAmount.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOfflineSalesAmount.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.offlineSales = action.payload;
      })
      .addCase(fetchOfflineSalesAmount.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchOfflineSalesAmountYearly.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOfflineSalesAmountYearly.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.yearlySales = action.payload.yearlySum;
      })
      .addCase(fetchOfflineSalesAmountYearly.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchOfflineSalesAmountMonthlyYearly.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOfflineSalesAmountMonthlyYearly.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.yearlySales = action.payload.yearlySum;
        state.monthlySales = action.payload.monthlySums;
      })
      .addCase(fetchOfflineSalesAmountMonthlyYearly.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchTotalRevenue.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTotalRevenue.fulfilled, (state, action) => {
        state.totalRevenue = action.payload.totalRevenue;
        state.loading = false;
      })
      .addCase(fetchTotalRevenue.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchHighestMonthlySales.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHighestMonthlySales.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.highestMonthlySales = action.payload;
      })
      .addCase(fetchHighestMonthlySales.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchLowestMonthlySales.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLowestMonthlySales.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.lowestMonthlySales = action.payload;
      })
      .addCase(fetchLowestMonthlySales.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchAverageSales.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAverageSales.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.averageSales = action.payload;  // Update averageSales with the payload data
      })
      .addCase(fetchAverageSales.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default dashboardSlice.reducer;
