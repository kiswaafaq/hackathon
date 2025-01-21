import React from 'react';
import AnalyticDashboard from '../../components/dashboard/AnalyticDashboard';

const DashboardPage = () => {
  const data = { sales: 12000, traffic: 5000 };

  return <AnalyticDashboard sales={data.sales} traffic={data.traffic} />;
};

export default DashboardPage;
