import React from 'react';
import { NavLink } from 'react-router-dom';
import 'notyf/notyf.min.css';
import { Notyf } from 'notyf/';
import moment from 'moment';
import css from './dashboardMenu.module.css';
import { render } from '@testing-library/react';

const notyf = new Notyf();
const notyfMessage = notyf.error(
  'Привет! Для начала работы внеси текущий баланс своего счета! Ты не можешь тратить деньги пока их у тебя нет :)',
);

const DashboardMenu = ({ props }) => (
  <div className={css.dashMenu__container}>
    {moment().format('YYYYMMDD') !== moment({ props }).format('YYYYMMDD') &&
    props.balance === 0
      ? notyfMessage
      : null}
    <div className={css.balance__wrapper}>
      <h2 htmlFor="input" className={css.balance__title}>
        БАЛАНС:
      </h2>
      <span className={css.balance__value}>00.00 грн</span>
    </div>

    <button className={css.dashMenu__incomeBtn}>Ввести доход</button>
    <div className={css.dashMenu__linkContainer}>
      <NavLink to="/statistics" className={css.dashMenu__linkTo}>
        <svg
          style={{
            display: 'block',
            padding: '3px',
            margin: '0 auto',
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28"
        >
          <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" />
          <path fill="none" d="M0 0h24v24H0z" />
        </svg>
      </NavLink>
      <NavLink to="/statistics" className={css.dashMenu__linkTitle}>
        Перейти к отчётам
      </NavLink>
    </div>
  </div>
);

export default DashboardMenu;
