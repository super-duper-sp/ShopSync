import HomeLayout from "./Layout/HomeLayout";
import AuthPage from "./pages/AuthPage";
import DailyTransactionPage from "./pages/DailyTransactionPage";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SettingsPage from "./pages/SettingsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import Shop from "./components/SettingsPage/Shop";
import User from "./components/SettingsPage/User";

function App() {
  return (
    
    <BrowserRouter>

    <Routes>

      {/* for Home */}

      <Route path="/" element={<HomeLayout/>}>
          <Route index element={<HomePage/>} />
          <Route path="dashboard" element={<DashboardPage/>} />    
          <Route path="dailytransactons" element={<DailyTransactionPage/>} />  

          <Route path="/settings" element={<SettingsPage />} >
              <Route path="shop" element={<Shop/>}/>
              <Route path="users" element={<User/>} />
          </Route>

          <Route path="settings" element={<SettingsPage/>} />   
          <Route path="analytics" element={<AnalyticsPage/>} />   
      </Route>

      {/* for Landing */}
      <Route path="/Landing" element={<LandingPage />}>
      </Route>

      

      {/* for auth login/register */}
      <Route path="/Auth" element={<AuthPage/>}>
        {/* <Route index element={<Auth />} /> */}
      </Route>

      {/* for daily transactions */}
      {/* <Route path="/dailytransactions" element={<Homepage />}>
        <Route index element={<DailyTransactions/>} />
      </Route> */}

       {/* for Analytics  */}
       {/* <Route path="/analytics" element={<Homepage />}>
        <Route index element={<Analytics/>} />
      </Route> */}
      
      {/* for dashboard */}
      {/* <Route path="/dashboard" element={<Homepage />}>
        <Route index element={<Dashboard />} />
      </Route> */}

      {/* <Route path="/setting/" element={<Homepage />}> */}
        
      {/* <Route index element={<Settings />} />
        <Route path="shop" element={<Shop />} />
        <Route path="users" element={<Users />} />
      </Route> */}
    
    </Routes>

  </BrowserRouter>
  );
}

export default App;
