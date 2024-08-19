import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto' 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import axios from 'axios';

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
 
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

const LineChart = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [],
        fill: false,
        borderColor: 'rgb(54, 162, 235)', // A distinct blue color
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: 'rgb(54, 162, 235)',
        pointRadius: 5, // Increase point size for visibility
        tension: 0.4, // Smooth the line a bit more
      },
    ],
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Revenue for the Year',
      },
      zoom: {
        pan: {
          enabled: true,
          mode: 'xy',
        },
        zoom: {
          enabled: true,
          mode: 'xy',
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
          text: 'Revenue ($)',
        },
        beginAtZero: true,
        max: 100000, // Adjust this according to your data
      },
    },
  };

  useEffect(() => {
    axios.get('http://localhost:3002/api/offline-sales-month-year/2024')
      .then(response => {
        const monthlySums = response.data.monthlySums;
        const labels = Object.keys(monthlySums).map(key => {
          const month = new Date(2024, key.split('-')[1] - 1).toLocaleString('default', { month: 'long' });
          return month;
        });
        const dataPoints = Object.values(monthlySums);
        setData({
          labels,
          datasets: [
            {
              label: 'Monthly Revenue',
              data: dataPoints,
              fill: false,
              borderColor: 'rgb(54, 162, 235)', // A distinct blue color
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              pointBackgroundColor: 'rgb(54, 162, 235)',
              pointBorderColor: 'rgb(54, 162, 235)',
              pointRadius: 5, // Increase point size for visibility
              tension: 0.4, // Smooth the line a bit more
            },
          ],
        });
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="relative h-96 w-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
