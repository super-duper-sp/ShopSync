import { createSlice } from '@reduxjs/toolkit';
import { fetchShopDetails, editShopDetails } from './ShopAction';

const initialState = {
  shop: null,
  loading: false,
  error: null,
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch Shop Details
    builder
      .addCase(fetchShopDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchShopDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.shop = action.payload;
      })
      .addCase(fetchShopDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Edit Shop Details
    builder
      .addCase(editShopDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editShopDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.shop = action.payload;
      })
      .addCase(editShopDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default shopSlice.reducer;