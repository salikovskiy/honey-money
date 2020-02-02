import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './dashboardMenu.module.css';

const DashboardMenu = ({ props }) => {
  return (
    <div className={css.dashMenu__container}>
      <form onSubmit={props} className={css.balance__form}>
        <label htmlFor="input" className={css.balance__label}>
          БАЛАНС:
        </label>
        <input
          value={props}
          onChange={props}
          type="number"
          className={css.balance__input}
          placeholder="00.00 грн"
          name="name"
        ></input>
      </form>
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
};

export default DashboardMenu;
