import React, { Component } from 'react';
import StatisticsMenu from '../../components/statisticsMenu/StatisticsMenu';
import StatisticAmounts from '../../components/statisticAmounts/StatisticAmounts';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import BarChart from '../../components/barChart/BarChart';
import s from './StatisticsPage.module.css';

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

class StatisticsPage extends Component {
  render() {
    return (
      <div className={s.wrapper}>
        <div className={s.header}>Header</div>
        <StatisticsMenu />
        <StatisticAmounts />
        <CategoriesList />
        <BarChart labels={labels} data={data} />
      </div>
    );
  }
}

export default StatisticsPage;
