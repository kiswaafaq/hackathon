import React from 'react';

// Define the types for the props
interface AnalyticDashboardProps {
  sales: number;
  traffic: number;
}

const AnalyticDashboard: React.FC<AnalyticDashboardProps> = ({ sales, traffic }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-xl font-bold mb-4">Analytics Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
        {/* Sales KPI */}
        <div className="kpi border p-4 rounded-lg shadow hover:shadow-lg transition duration-300 ease-in-out">
          <h3 className="text-lg font-semibold">Sales</h3>
          <p className="text-xl">${sales.toLocaleString()}</p>
        </div>

        {/* Traffic KPI */}
        <div className="kpi border p-4 rounded-lg shadow hover:shadow-lg transition duration-300 ease-in-out">
          <h3 className="text-lg font-semibold">Traffic</h3>
          <p className="text-xl">{traffic.toLocaleString()} visits</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticDashboard;
