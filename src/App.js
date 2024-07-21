import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>

    <Routes>

      {/* for Home */}
      <Route path="/Home" element={<HomePage/>}>
      </Route>

      {/* for Landing */}
      <Route path="/" element={<LandingPage />}>
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
