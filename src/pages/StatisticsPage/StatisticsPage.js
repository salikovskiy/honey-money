import React, { Component } from 'react';
import s from './StatisticsPage.module.css';
import StatisticsMenu from '../../components/statisticsMenu/StatisticsMenu';
import CategoriesList from '../../components/CategoriesList/CategoriesList';

class StatisticsPage extends Component {
  render() {
    return (
      <div className={s.wrapper}>
        <div className={s.header}>Header</div>
        <StatisticsMenu />
        <div className={s.statistic_amounts}>StatisticAmounts</div>
        <CategoriesList />
        <div className={s.chart}>Chart</div>
      </div>
    );
  }
}

export default StatisticsPage;
