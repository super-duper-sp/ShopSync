import React from "react";
import SalesVisualization from "../components/AnalyticsPage/SalesVisualization";
import SalesMonthly from "../components/AnalyticsPage/SalesMonthly";
import ProfitCalculator from "../components/AnalyticsPage/ProfitCalculator";

const AnalyticsPage = () => {
  return (
    <div className='min-h-screen p-6 bg-gray-100'>
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Analytics</h1>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SalesMonthly Component */}
        <div className="rounded-lg shadow-md p-6">
          <SalesMonthly />
        </div>

        {/* SalesVisualization and ProfitCalculator */}
        <div className="flex flex-col gap-6">
          {/* SalesVisualization Component */}
          <div className="rounded-lg shadow-md p-6 flex-1">
            <SalesVisualization />
          </div>

          {/* ProfitCalculator Component */}
          <div className=" rounded-lg shadow-md p-6 flex-1">
            <ProfitCalculator />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
