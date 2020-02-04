import React from 'react';
// import PropTypes from 'prop-types';
import css from './StatisticAmounts.module.css';

const StatisticAmounts = () => (
  <div className={css.StatisticAmountsContainer}>
    <ul className={css.AmountContainer}>
      <li className={css.AmountCost}>
        <p>Расходы:</p>
        <p className={css.TotalAmountCost}>- 2,098,457.00 грн.</p>
      </li>
      <span className={css.figure}></span>
      <li className={css.AmountIncome}>
        <p>Доходы:</p>
        <p className={css.TotalAmountIncome}>3,464,565.00 грн.</p>
      </li>
    </ul>
  </div>
);

export default StatisticAmounts;
