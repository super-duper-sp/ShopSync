import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Auth/AuthSlice';
import dailyTransactionReducer from './DailyTransaction/DailyTransactionSlice';
import shopReducer from "./Shop/ShopSlice";
import userReducer from './User/UserSlice';
import dashboardReducer from './Dashboard/DashboardSlice'
import memberReducer from "./Member/MemberSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    dailyTransactions: dailyTransactionReducer,
    shop: shopReducer,
    user: userReducer,
    dashboard: dashboardReducer,
    member : memberReducer
  },

});

export default store;