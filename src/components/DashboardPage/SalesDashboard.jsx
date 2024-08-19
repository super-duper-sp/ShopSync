import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const OfflineSalesGraph = () => {
  const [monthlyData, setMonthlyData] = useState([]);
  const [yearlyData, setYearlyData] = useState([]);
  const [monthlyYearlyData, setMonthlyYearlyData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/api/offline-sales-monthly')
      .then(response => {
        const monthlyData = Object.keys(response.data).map(key => {
          return {
            month: key,
            sales: response.data[key]
          };
        });
        setMonthlyData(monthlyData);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('http://localhost:3002/api/offline-sales-yearly/2024')
      .then(response => {
        const yearlyData = [
          {
            year: 2024,
            sales: response.data.yearlySum
          }
        ];
        setYearlyData(yearlyData);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('http://localhost:3002/api/offline-sales-month-year/2024')
      .then(response => {
        const monthlyYearlyData = Object.keys(response.data.monthlySums).map(key => {
          return {
            month: key,
            sales: response.data.monthlySums[key]
          };
        });
        setMonthlyYearlyData(monthlyYearlyData);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="graph-container">
      <h2>Offline Sales Data</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={monthlyData}>
          <Line type="monotone" dataKey="sales" stroke="#4CAF50" />
          <XAxis dataKey="month" tickFormatter={(tick) => tick.replace("-", " ")} />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>

      <h2>Yearly Offline Sales</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={yearlyData}>
          <Line type="monotone" dataKey="sales" stroke="#2196F3" />
          <XAxis dataKey="year" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>

      <h2>Monthly Offline Sales for 2024</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={monthlyYearlyData}>
          <Line type="monotone" dataKey="sales" stroke="#FFC107" />
          <XAxis dataKey="month" tickFormatter={(tick) => tick.replace("-", " ")} />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OfflineSalesGraph;