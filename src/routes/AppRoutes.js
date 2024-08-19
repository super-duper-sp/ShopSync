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

export const AppRoutes = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const location = useLocation();
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  // useEffect(() => {
  //   dispatch(syncUserData()); // Retrieve user data from cookie
  // }, [dispatch]);

  // useEffect(() => {
  //   if (!loading) {
  //     if (!isAuthenticated && location.pathname !== '/login' && location.pathname !== '/signup') {
  //       navigate('/login');
  //     }
  //   }
  // }, [isAuthenticated, location.pathname, navigate, loading]);

  // if (loading) {
  //   return <div>Loading...</div>; // You might want to show a loading indicator while fetching user data
  // }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<HomeLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="dailytransactions" element={<DailyTransactionPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="settings" element={<SettingLayout />}>
            <Route path="shop" element={<ShopPage />} />    {/* Shop Settings Sub-route */}
            <Route path="user" element={<UserPage />} />    {/* User Settings Sub-route */}
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
