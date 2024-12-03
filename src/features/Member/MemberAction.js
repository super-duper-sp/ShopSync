import axios from 'axios';
import {  createAsyncThunk } from '@reduxjs/toolkit';

import { BASE_URL } from '../../utils/constants';



export const fetchMembers = createAsyncThunk(
  'members/fetchMembers',
  async () => {
    const response = await axios.get(`${BASE_URL}/api/shopmember`,
    {
        
        withCredentials: true,
        
    });
    return response.data;
  }
);

export const addMember = createAsyncThunk(
  'members/addMember',
  async (memberData) => {
    const response = await axios.post(`${BASE_URL}/api/shopmember`, memberData,{
        
    withCredentials: true,
    
});
    return response.data;
  }
);

export const updateMember = createAsyncThunk(
  'members/updateMember',
  async ({ id, memberData }) => {
    const response = await axios.put(`${BASE_URL}/api/shopmember/${id}`, memberData,{
        
    withCredentials: true,
    
});
    return response.data;
  }
);

export const deleteMember = createAsyncThunk(
  'members/deleteMember',
  async (id) => {
    const response = await axios.delete(`${BASE_URL}/api/shopmember/${id}`,{
        
    withCredentials: true,
    
});
    return response.data;
  }
);