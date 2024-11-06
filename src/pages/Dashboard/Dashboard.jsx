import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Sample data for products sold per month
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Products Sold',
        data: [50, 70, 100, 40, 80, 150, 130, 110, 90, 120, 160, 140],
        backgroundColor: '#ff7849',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Monthly Product Sales' },
    },
  };

  return (
    <div className="pt-24 px-10 font-mono">
      <h1 className="text-4xl font-bold text-center mb-6">Seller Dashboard</h1>
      
      {/* Overview Section */}
      <div className="flex gap-6 mb-10 justify-center">
        <div className="bg-white shadow-md rounded-lg p-5 w-60 text-center">
          <p className="text-xl font-semibold">Total Sales</p>
          <p className="text-3xl font-bold mt-2">1,250</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-5 w-60 text-center">
          <p className="text-xl font-semibold">Revenue</p>
          <p className="text-3xl font-bold mt-2">$24,000</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-5 w-60 text-center">
          <p className="text-xl font-semibold">Products Sold</p>
          <p className="text-3xl font-bold mt-2">4,500</p>
        </div>
      </div>

      {/* Monthly Sales Chart */}

      {/* Recent Activity Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-4">
          <li className="flex justify-between items-center border-b pb-3">
            <span className="font-medium">Product ID: #12345</span>
            <span className="text-gray-500">Sold on: 5th October</span>
            <span className="font-bold text-orange-600">$500</span>
          </li>
          <li className="flex justify-between items-center border-b pb-3">
            <span className="font-medium">Product ID: #12346</span>
            <span className="text-gray-500">Sold on: 10th October</span>
            <span className="font-bold text-orange-600">$320</span>
          </li>
          <li className="flex justify-between items-center border-b pb-3">
            <span className="font-medium">Product ID: #12347</span>
            <span className="text-gray-500">Sold on: 15th October</span>
            <span className="font-bold text-orange-600">$450</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
