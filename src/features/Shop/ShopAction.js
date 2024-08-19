import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Thunk for fetching shop details
export const fetchShopDetails = createAsyncThunk(
  'shop/fetchShopDetails',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/shop/',{
         
      withCredentials: true,
  
});
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async Thunk for editing shop details
export const editShopDetails = createAsyncThunk(
  'shop/editShopDetails',
  async (shopDetails, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/shop/', shopDetails);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);