import React from 'react';
import { Link } from 'react-router-dom';
import css from './dashboardMenu.module.css';

export default class DashboardMenu extends Comment {
  state = {};

  render() {
    return (
      <div className={css.dashMenu__container}>
        <div className={css.dashMenu__text}>
          <h2 className={css.dashMenu__title}>Balance:</h2>
          <span className={css.dashMenu__balance}>00.00 uah</span>
        </div>
        <btn className={css.dashMenu__incomeBtn}>Set income</btn>
        <Link className={css.dashMenu__linkTo}></Link>
        <p>Check statistics</p>
      </div>
    );
  }
}
