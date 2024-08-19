// src/components/AnalyticsPage/ProfitCalculator.js
import React, { useState } from 'react';

const ProfitCalculator = () => {
  const [costPrice, setCostPrice] = useState('');
  const [profitPercentage, setProfitPercentage] = useState('');
  const [profit, setProfit] = useState(null);

  const handleCalculate = () => {
    const cost = parseFloat(costPrice);
    const percentage = parseFloat(profitPercentage);

    if (!isNaN(cost) && !isNaN(percentage)) {
      const calculatedProfit = (cost * percentage) / 100;
      setProfit(calculatedProfit.toFixed(2)); // Keep 2 decimal places
    } else {
      setProfit(null);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Profit Calculator</h2>
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-gray-700">
            Amount (₹):
            <input
              type="number"
              value={costPrice}
              onChange={(e) => setCostPrice(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-gray-700">
            Profit Percentage (%):
            <input
              type="number"
              value={profitPercentage}
              onChange={(e) => setProfitPercentage(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>
        <button
          onClick={handleCalculate}
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300"
        >
          Calculate 
        </button>
        {profit !== null && (
          <div className="mt-4 text-center text-lg font-medium text-gray-700">
            Profit: ₹ {profit}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfitCalculator;
