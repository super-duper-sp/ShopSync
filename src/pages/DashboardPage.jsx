import React from "react";
import WholeInfo from "../components/DashboardPage/WholeInfo";
import SalesDashboard from "../components/DashboardPage/SalesDashboard";

const DashboardPage = () => {
  return (
    <div className='min-h-screen p-6 bg-gray-100 border border-gray-200 rounded-lg shadow-sm'>
    {/* Container for main content */}
   
      {/* WholeInfo Component */}
      <div className="flex-1 mb-6">
        <WholeInfo />
      </div>

      {/* SalesDashboard Component */}
      {/* <div className="flex-1">
        <SalesDashboard />
      </div> */}
    
    </div>
   

  );
};

export default DashboardPage;
