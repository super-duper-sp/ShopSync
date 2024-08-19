import {  createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

import Cookies from 'js-cookie';



export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/user/login', credentials, {
        withCredentials: true, // Allows sending cookies with the request
      });

      const { token } = response.data; // Assuming the server sends the token
      Cookies.set('token', token, { expires: 7, secure: true, sameSite: 'strict' });
      const decoded = jwtDecode(token); // Decode token to get user data (if required)
      return decoded; // Return decoded user data as payload
    } catch (err) {
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);
// Async Thunk for Register
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/user/register', credentials, {
        withCredentials: true, // Allows sending cookies with the request
      });
      return response.data; // Assuming the server sends back user data or a success message
    } catch (err) {
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

// Action for Logout
export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/api/user/logout', {}, {
        withCredentials: true, // Allows sending cookies with the request
      });
      return; // No payload needed for logout
    } catch (err) {
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);


export const syncUserData = createAsyncThunk(
  'auth/syncUserData',
  async (_, { rejectWithValue }) => {
    try {
      const token = Cookies.get('token'); // Retrieve token from cookies
      if (!token) throw new Error('No token found');

      const decoded = jwtDecode(token);
      return decoded;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);