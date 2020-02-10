import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import css from './StatisticAmounts.module.css';

const StatisticAmounts = ({ costsMonth, incomesMonth }) => (
  <div className={css.StatisticAmountsContainer}>
    <ul className={css.AmountContainer}>
      <li className={css.AmountCost}>
        <p>Расходы: </p>
        <p className={css.TotalAmountCost}>- {costsMonth} грн.</p>
      </li>
      <span className={css.figure}></span>
      <li className={css.AmountIncome}>
        <p>Доходы: </p>
        <p className={css.TotalAmountIncome}>+ {incomesMonth} грн.</p>
      </li>
    </ul>
  </div>
);
const mapStateToProps = state => state;

StatisticAmounts.propTypes = {
  costsMonth: PropTypes.number.isRequired,
  incomesMonth: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(StatisticAmounts);
