import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faGlobe,
  faStar,
  faCircleQuestion,
  faEllipsis,
  faUpload,
  faPlusCircle,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Sample Chart Data
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales (₹)',
        data: [5000, 10000, 15000, 20000, 25000, 30000],
        backgroundColor: '#4ade80',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Sales Overview',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 font-mono">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: 'url(https://via.placeholder.com/150)',
        }}
      ></div>

      <div className="relative z-10 p-6">
        <header className="pb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        </header>

        {/* Quick Actions */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="flex gap-4">
            <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
              <FontAwesomeIcon icon={faUpload} className="mr-2" />
              Upload Files
            </button>
            <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600">
              <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
              Create New Project
            </button>
            <button className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-md shadow hover:bg-yellow-600">
              <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
              View Reports
            </button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
          {[
            { title: 'Sales', value: '₹0.0', icon: faChevronDown },
            { title: 'Market Place', value: '1', icon: faGlobe },
            { title: 'Open Orders', value: '0', icon: faChevronDown },
            { title: 'Buyer Messages', value: '0', icon: faChevronDown },
            { title: 'Featured Offers', value: '---', icon: faChevronDown },
            { title: 'Customer Feedback', value: '★★★★★', icon: faChevronDown },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 bg-white border border-gray-300 rounded-md shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-sm font-semibold text-gray-600">{stat.title}</h2>
                <FontAwesomeIcon icon={stat.icon} className="text-gray-400" />
              </div>
              <p className="text-lg font-bold text-gray-800">{stat.value}</p>
            </div>
          ))}
        </section>

        {/* Charts Section */}
        <section className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-white border border-gray-300 rounded-md p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-600 mb-4">
              Monthly Sales Overview
            </h2>
            <Bar data={chartData} options={chartOptions} />
          </div>

          <div className="w-full md:w-1/3 bg-white border border-gray-300 rounded-md p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-600 mb-4">Communication</h2>
            <p className="text-gray-500 text-sm">
              Placeholder for communication updates or notifications.
            </p>
          </div>
        </section>

        {/* Actions Section */}
        <section className="mt-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Action Required</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-300 rounded-md p-4 shadow-sm flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  You have FBA inventory without active offers
                </p>
                <p className="text-xs text-gray-500">
                  2470 total units standard; 2500 units idle for more than 15 days
                </p>
              </div>
              <button className="text-blue-500 font-medium hover:underline">
                Fix Standard Inventory
              </button>
            </div>

            <div className="bg-white border border-gray-300 rounded-md p-4 shadow-sm flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold text-gray-600">Return Dashboard</p>
                <p className="text-xs text-gray-500">
                  View products with high return rates and review customer feedback.
                </p>
              </div>
              <button className="text-blue-500 font-medium hover:underline">
                Explore Dashboard
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
