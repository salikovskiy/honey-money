import React from 'react';
import StatisticsMenu from '../../components/statisticsMenu/StatisticsMenu';
import BarChart from '../../components/barChart/BarChart';
import StatisticAmounts from './../../components/statisticAmounts/StatisticAmounts';
const StatisticPage = () => {
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'January',
    'February',
    'March',
  ];
  const data = [65, 59, 80, 81, 56, 55, 40, 3, 59, 80];

  return (
    <>
      <h2>StatisticPage</h2>
      <StatisticsMenu />
      <BarChart labels={labels} data={data} />
      <StatisticAmounts />
    </>
  );
};

export default StatisticPage;
