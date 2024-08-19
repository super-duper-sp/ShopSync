import { createSlice } from '@reduxjs/toolkit';
import { fetchMembers, addMember, updateMember, deleteMember } from './MemberAction';

// Define initial state
const initialState = {
  members: [],
  currentPage: 1,
  totalPages: 1,
  totalMembers: 0,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Create the slice
const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Members
      .addCase(fetchMembers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchMembers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.members = action.payload.members; // Adjust this based on your API response structure
        state.currentPage = action.payload.pagination.page;
        state.totalPages = action.payload.pagination.totalPages;
        state.totalMembers = action.payload.pagination.totalMembers;
      })
      .addCase(fetchMembers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Add Member
      .addCase(addMember.fulfilled, (state, action) => {
        state.members.push(action.payload);
      })
      // Update Member
      .addCase(updateMember.fulfilled, (state, action) => {
        const index = state.members.findIndex(member => member._id === action.payload._id);
        if (index !== -1) {
          state.members[index] = action.payload;
        }
      })
      // Delete Member
      .addCase(deleteMember.fulfilled, (state, action) => {
        state.members = state.members.filter(member => member._id !== action.payload._id);
      });
  },
});

export default memberSlice.reducer;
