import {  createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

import Cookies from 'js-cookie';


import { BASE_URL } from '../../utils/constants';


export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/user/login`, credentials, {
        withCredentials: true, // Allows sending cookies with the request
      });

      const { token } = response.data; // Assuming the server sends the token
      if (token) {
        // Store the token in cookies with security options
        Cookies.set('token', token, {
          expires: 7, // Token will expire in 7 days
          secure: true, // Ensures the cookie is sent over HTTPS
          sameSite: 'strict', // Helps prevent CSRF attacks by ensuring the cookie is sent with same-site requests only
        });
        
    
        // Decode the token to extract user data (if required)
        const decoded = jwtDecode(token);
    
        // Optionally store the decoded user data in a global state or context
        return decoded; // Return decoded user data as payload (e.g., user ID, roles, etc.)

      }
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
      const response = await axios.post(`${BASE_URL}/api/user/register`, credentials, {
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
      await axios.post(`${BASE_URL}/api/user/logout`, {}, {
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
