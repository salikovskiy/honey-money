import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { createBrowserHistory } from 'history';
import styles from './statisticsMenu.module.css';
import moment from 'moment';
import 'moment/locale/ru';

const dateNow = moment().format();

class StatisticsMenu extends Component {
  state = {
    date: dateNow,
    dateRegistration: '2019-09-30T18:22:59.462Z',
  };

  // componentDidMount() {
  //   console.log('this.props.StatisticsMenu :', this.props.currentDate);
  // }

  handleGoBack = () => {
    createBrowserHistory().goBack();
  };

  handleMonthChange = e => {
    if (e.target.name === 'leftBtn') {
      this.setState({
        date: moment(this.state.date)
          .add(-1, 'month')
          .format(),
      });
    }
    if (e.target.name === 'rightBtn') {
      this.setState({
        date: moment(this.state.date)
          .add(+1, 'month')
          .format(),
      });
    }
  };

  handlePrevMonth = () => {
    if (moment(this.state.date).isAfter(this.state.dateRegistration)) {
      return false;
    } else return true;
  };

  handleNextMonth = () => {
    if (
      moment().format('MMMM YYYY') ===
      moment(this.state.date).format('MMMM YYYY')
    ) {
      return true;
    } else return false;
  };

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
              Баланс на {moment().format('DD.MM.YYYY')}:
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
                className={
                  this.handlePrevMonth()
                    ? styles.statisticsMenu_calendar_monthsBtn_left_dis
                    : styles.statisticsMenu_calendar_monthsBtn_left
                }
                type="button"
                name="leftBtn"
                onClick={this.handleMonthChange}
                disabled={this.handlePrevMonth()}
              ></button>
              <p className={styles.statisticsMenu_calendar_months}>
                {/* {moment(this.state.date).format('MMMM YYYY')} */}
                {this.props.currentDate}
              </p>
              <button
                className={
                  this.handleNextMonth()
                    ? styles.statisticsMenu_calendar_monthsBtn_right_dis
                    : styles.statisticsMenu_calendar_monthsBtn_right
                }
                type="button"
                name="rightBtn"
                onClick={this.handleMonthChange}
                disabled={this.handleNextMonth()}
              ></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatisticsMenu;
