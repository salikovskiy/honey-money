import React, { Component } from 'react';
import s from './StatisticsPage.module.css';

class StatisticsPage extends Component {
  state: {};
  render() {
    return (
      <div className={s.wrapper}>
        <div className={s.header}>Header</div>
        <div className={s.statistic_menu}>StatisticMenu</div>
        <div className={s.statistic_amounts}>StatisticAmounts</div>
        <div className={s.categories_list}>CategoriesList</div>
        <div className={s.chart}>Chart</div>
      </div>
    );
  }
}

export default StatisticsPage;
