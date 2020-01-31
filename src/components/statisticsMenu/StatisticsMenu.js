import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './statisticsMenu.module.css';
import getDateNow from '../../utilities/getDateNow';

class StatisticsMenu extends Component {
  state = {};

  //handleGoBack = () => {
  //this.props.history.push('/dashboard');
  //this.props.history.goBack();
  //};

  render() {
    return (
      <div className={styles.statistics}>
        <div className={styles.statisticsMenu}>
          <button
            className={styles.statisticsMenu_goBack}
            type="button"
            onClick={this.handleGoBack}
          >
            Вернуться
            <pre className={styles.statisticsMenu_goBack_pre}> на главную</pre>
          </button>
          <div className={styles.statisticsMenu_dateBalance_wrap}>
            <p className={styles.statisticsMenu_dateBalance_text}>
              Баланс на {getDateNow()}:
            </p>
            <p className={styles.statisticsMenu_dateBalance_value}>
              150,000.00 грн
            </p>
          </div>
          <div className={styles.statisticsMenu_calendar_wrap}>
            <p className={styles.statisticsMenu_calendar_text}>
              Текущий период:
            </p>
            <div className={styles.statisticsMenu_calendar_monthsWrap}>
              <button
                className={styles.statisticsMenu_calendar_monthsBtn_left}
                type="button"
                name="leftBtn"
              ></button>
              <p className={styles.statisticsMenu_calendar_months}>
                Январь 2020
              </p>
              <button
                className={styles.statisticsMenu_calendar_monthsBtn_right}
                type="button"
                name="rightBtn"
              ></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatisticsMenu;
