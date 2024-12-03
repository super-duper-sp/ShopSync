import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import ProtectedRoute from '../utils/ProtectedRoutes';
import { LoginPage } from '../pages/LoginPage';
import LandingPage from '../pages/LandingPage';
import SignupPage from '../pages/SignupPage';
import HomeLayout from '../Layout/HomeLayout';
import DashboardPage from '../pages/DashboardPage';
import AnalyticsPage from '../pages/AnalyticsPage';
import DailyTransactionPage from '../pages/DailyTransactionPage';
import { useDispatch, useSelector } from 'react-redux';
import { syncUserData } from '../features/Auth/AuthAction';
import SettingLayout from '../Layout/SettingLayout';
import ShopPage from '../pages/ShopPage';
import UserPage from '../pages/UserPage';
import PageNotFound from '../pages/PageNotFound';
import {jwtDecode} from 'jwt-decode';
import Cookies from 'js-cookie';


export const AppRoutes = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const location = useLocation();
  
  // // Retrieve the authentication state and loading state from Redux
  // const { isAuthenticated, loading } = useSelector((state) => state.auth);

  // // Synchronize user data when the app loads
  // useEffect(() => {
  //   dispatch(syncUserData()); // Sync user data from cookies or session storage
  // }, [dispatch]);

  // useEffect(() => {
  //   const token = Cookies.get('token'); // Or localStorage.getItem('token');
  //   if (token) {
  //     const decoded = jwtDecode(token);
  //     dispatch(syncUserData()); // Sync user data from cookies or session storage
  //   }
  // }, []);
  

  // // Redirect to login if not authenticated and the user is trying to access protected routes
  // useEffect(() => {
  //   if (!loading) {
  //     if (!isAuthenticated && location.pathname !== '/login' && location.pathname !== '/signup') {
  //       navigate('/login');
  //     }
  //   }
  // }, [isAuthenticated, location.pathname, navigate, loading]);

  // // Show a loading indicator while the user data is being fetched
  // if (loading) {
  //   return <div>Loading...</div>; // You can replace this with a spinner or more elaborate loading indicator
  // }
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get('token'); // Or localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      dispatch(syncUserData(decoded)); // Restore user state
    }
  }, [dispatch]);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<HomeLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="dailytransactions" element={<DailyTransactionPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="settings" element={<SettingLayout />}>
            <Route path="shop" element={<ShopPage />} />    {/* Shop Settings Sub-route */}
            <Route path="user" element={<UserPage />} />    {/* User Settings Sub-route */}
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Route>

      {/* Catch-all for non-existent routes */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
