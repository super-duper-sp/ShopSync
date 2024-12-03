import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from '../../utils/constants';



export const fetchOfflineSalesAmount = createAsyncThunk(
  'dashboard/fetchOfflineSalesAmount',
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/offline-sales-monthly`,{
        
      withCredentials: true,
      
  });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data || 'Failed to fetch offline sales amount');
    }
  }
);


export const fetchOfflineSalesAmountYearly = createAsyncThunk(
    'dashboard/fetchOfflineSalesAmountYearly',
    async (year) => {
      try {
        const response = await axios.get(`${BASE_URL}/offline-sales-yearly/${year}`,{
        
        withCredentials: true,
        
    });
        return response.data;
      } catch (error) {
        throw new Error(error.response?.data || 'Failed to fetch offline sales amount yearly');
      }
    }
  );
  

  export const fetchOfflineSalesAmountMonthlyYearly = createAsyncThunk(
    'dashboard/fetchOfflineSalesAmountMonthlyYearly',
    async (year) => {
      try {
        const response = await axios.get(`${BASE_URL}/offline-sales-month-year/${year}`,{
        
        withCredentials: true,
        
    });
        return response.data;
      } catch (error) {
        throw new Error(error.response?.data || 'Failed to fetch offline sales amount monthly and yearly');
      }
    }
  );
  

  export const fetchTotalRevenue = createAsyncThunk(
    'dashboard/fetchTotalRevenue',
    async (year, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${BASE_URL}/api/total-revenue`, {
        
        withCredentials: true,
        
    });
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to fetch total revenue');
      }
    }
  );


  // Fetch highest monthly sales
export const fetchHighestMonthlySales = createAsyncThunk(
  "dashboard/fetchHighestMonthlySales",
  async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/highest-monthly-sales`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data || "Failed to fetch highest monthly sales"
      );
    }
  }
);

// Fetch lowest monthly sales
export const fetchLowestMonthlySales = createAsyncThunk(
  "dashboard/fetchLowestMonthlySales",
  async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/lowest-monthly-sales`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data || "Failed to fetch lowest monthly sales"
      );
    }
  }
);

  

// Fetch average sales
export const fetchAverageSales = createAsyncThunk(
  'dashboard/fetchAverageSales',
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/average-sales/`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data || 'Failed to fetch average sales');
    }
  }
);