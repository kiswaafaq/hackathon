import AnalyticDashboard from '../../components/dashboard/AnalyticDashboard.tsx';
import React from 'react';

const DashboardPage = () => {
  const data = { sales: 12000, traffic: 5000 };

  return <AnalyticDashboard sales={data.sales} traffic={data.traffic} />;
};

export default DashboardPage;