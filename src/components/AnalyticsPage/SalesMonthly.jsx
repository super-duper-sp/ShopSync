// src/components/AnalyticsPage/SalesMonthly.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesMonthly = () => {
  const [salesData, setSalesData] = useState({});
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  const colors = [
    'rgba(75, 192, 192, ',
    'rgba(255, 99, 132, ',
    'rgba(255, 159, 64, ',
    'rgba(255, 205, 86, ',
    'rgba(153, 102, 255, ',
    'rgba(54, 162, 235, ',
    'rgba(201, 203, 207, ',
  ];

  useEffect(() => {
    axios.get('http://localhost:3002/api/offline-sales-monthly')
      .then(response => {
        const data = response.data;
        const labels = [];
        const yearlyData = {};

        Object.entries(data).forEach(([key, value]) => {
          const [year, month] = key.split('-');
          const label = `${month}/${year}`;
          if (!labels.includes(label)) {
            labels.push(label);
          }

          if (!yearlyData[year]) {
            yearlyData[year] = Array(12).fill(0);
          }
          yearlyData[year][parseInt(month, 10) - 1] = value;
        });

        const sortedLabels = labels.sort((a, b) => {
          const [monthA, yearA] = a.split('/').map(Number);
          const [monthB, yearB] = b.split('/').map(Number);
          return yearA - yearB || monthA - monthB;
        });

        const datasets = Object.keys(yearlyData).map((year, index) => ({
          label: year,
          data: yearlyData[year],
          fill: true,
          backgroundColor: function(context) {
            const { chart } = context;
            const { ctx, chartArea } = chart;

            if (!chartArea) {
              return null;
            }

            return getGradientColor(ctx, chartArea, colors[index % colors.length]);
          },
          borderColor: `${colors[index % colors.length]}1)`,
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 5,
          tension: 0.3,
        }));

        setChartData({
          labels: sortedLabels,
          datasets: datasets,
        });
      })
      .catch(error => console.error('Error fetching sales data:', error));
  }, []);

  const getGradientColor = (ctx, chartArea, color) => {
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    
    gradient.addColorStop(0, `${color}0.3)`); // Start with more transparent
    gradient.addColorStop(1, `${color}0.7)`); // End with less transparent
    
    return gradient;
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Monthly Sales Data by Year</h2>
        <div className="w-full h-[500px]">
          <Line
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
                    label: (context) => `$${context.raw.toLocaleString()}`, // Format sales with commas
                  },
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Month/Year',
                  },
                  grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: 'Sales ($)',
                  },
                  beginAtZero: true,
                  grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                  },
                },
              },
              hover: {
                mode: 'index',
                intersect: false,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SalesMonthly;
