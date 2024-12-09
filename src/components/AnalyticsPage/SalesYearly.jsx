// src/YearlySalesCard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';


const SalesYearly = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear); // Default to current year
  const [yearlySum, setYearlySum] = useState(null);

  useEffect(() => {
    if (selectedYear) {
      // Fetch data from the API with the selected year using axios
      axios.get(`${BASE_URL}/api/offline-sales-yearly/${selectedYear}`)
        .then(response => {
          setYearlySum(response.data.yearlySum);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [selectedYear]);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const generateYearOptions = () => {
    const options = [];
    for (let year = 2018; year <= currentYear; year++) {
      options.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return options;
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="mb-4">
        <label htmlFor="year-select" className="block text-lg font-semibold mb-2">
          Select Year:
        </label>
        <select
          id="year-select"
          value={selectedYear}
          onChange={handleYearChange}
          className="p-2 border border-gray-300 rounded-lg shadow-sm"
        >
          {generateYearOptions()}
        </select>
      </div>
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-700">Yearly Sales</h2>
        {yearlySum === null ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : (
          <>
            <p className="text-gray-600 mt-2">Total Sales for {selectedYear}:</p>
            <p className="text-2xl font-bold text-gray-800 mt-2">${yearlySum.toLocaleString()}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default SalesYearly;
