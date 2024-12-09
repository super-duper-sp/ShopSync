// src/components/AnalyticsPage/SalesVisualization.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { BASE_URL } from '../../utils/constants';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesVisualization = () => {
  const [yearlySum, setYearlySum] = useState(0);
  const [monthlySums, setMonthlySums] = useState({});
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [years, setYears] = useState([]);

  useEffect(() => {
    // Generate year options from 2018 to the current year
    const startYear = 2018;
    const currentYear = new Date().getFullYear();
    const yearOptions = [];

    for (let year = startYear; year <= currentYear; year++) {
      yearOptions.push(year);
    }

    setYears(yearOptions);
  }, []);

  useEffect(() => {
    // Fetch data from the API based on selected year
    axios.get(`${BASE_URL}/api/offline-sales-month-year/${selectedYear}`)
      .then(response => {
        setYearlySum(response.data.yearlySum);
        setMonthlySums(response.data.monthlySums);
      })
      .catch(error => {
        console.error('Error fetching sales data:', error);
      });
  }, [selectedYear]);

  // Prepare data for the bar chart
  const chartData = {
    labels: Object.keys(monthlySums).map(month => new Date(0, month - 1).toLocaleString('default', { month: 'short' })),
    datasets: [
      {
        label: 'Monthly Sales',
        data: Object.values(monthlySums),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const handleYearChange = (e) => {
    setSelectedYear(Number(e.target.value));
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="relative">
          {/* Total Sales Overlay */}
          <div className="absolute top-0 p-3 bg-white shadow-md rounded-md border border-gray-300">
            <p className="text-xs font-bold text-green-600">${yearlySum}</p>
          </div>

          {/* Flex Container for Chart and Dropdown */}
          <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
            {/* Chart */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4 text-right md:text-left">Monthly Sales</h2>
              <div className="h-60 w-full"> {/* Set desired height */}
                <Bar
                  data={chartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'top',
                      },
                      tooltip: {
                        callbacks: {
                          label: (context) => `$${context.raw}`,
                        },
                      },
                    },
                    scales: {
                      x: {
                        title: {
                          display: true,
                          text: 'Month',
                        },
                      },
                      y: {
                        title: {
                          display: true,
                          text: 'Sales ($)',
                        },
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </div>
            </div>
            {/* Dropdown */}
            <div className="bottom-0 right-0 md:mt-0 flex-shrink-0 w-full md:w-auto">
              <label htmlFor="year" className="block text-xs font-semibold mb-2 text-center md:text-left">Select Year</label>
              <select
                id="year"
                value={selectedYear}
                onChange={handleYearChange}
                className="p-2 border rounded-md bg-white shadow-sm w-full md:w-auto"
              >
                {years.map(year => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesVisualization;
