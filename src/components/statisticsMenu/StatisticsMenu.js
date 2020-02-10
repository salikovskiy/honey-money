import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import styles from './statisticsMenu.module.css';
import moment from 'moment';
import 'moment/locale/ru';
// import PropTypes from 'prop-types';

class StatisticsMenu extends Component {
  handleGoBack = () => {
    createBrowserHistory().goBack();
  };

  // handleMonthChange = e => {
  //   if (e.target.name === 'leftBtn') {
  //     this.setState({
  //       date: moment(this.state.date)
  //         .add(-1, 'month')
  //         .format(),
  //     });
  //   }
  //   if (e.target.name === 'rightBtn') {
  //     this.setState({
  //       date: moment(this.state.date)
  //         .add(+1, 'month')
  //         .format(),
  //     });
  //   }
  // };

  handlePrevMonth = () => {
    if (moment(this.props.date).isAfter(this.props.dateRegistration)) {
      return false;
    } else return true;
  };

  handleNextMonth = () => {
    if (
      moment().format('YYYYMM') === moment(this.props.date).format('YYYYMM')
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
              {this.props.balance} грн
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
                onClick={this.props.monthChange}
                disabled={this.handlePrevMonth()}
              ></button>
              <p className={styles.statisticsMenu_calendar_months}>
                {moment(this.props.date).format('MMMM YYYY')}
              </p>
              <button
                className={
                  this.handleNextMonth()
                    ? styles.statisticsMenu_calendar_monthsBtn_right_dis
                    : styles.statisticsMenu_calendar_monthsBtn_right
                }
                type="button"
                name="rightBtn"
                onClick={this.props.monthChange}
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

// let costsMonth = 0;
// let incomesMonth = 0;

// const dateNow = moment().format();

// class StatisticsPage extends Component {
//   state = {
//     date: dateNow,
//     dateRegistration: this.props.finance.authReducer.createdAt,
//   };

//   handleMonthChange = e => {
//     if (e.target.name === 'leftBtn') {
//       this.setState({
//         date: moment(this.state.date)
//           .add(-1, 'month')
//           .format(),
//       });
//     }

//     if (e.target.name === 'rightBtn') {
//       this.setState({
//         date: moment(this.state.date)
//           .add(+1, 'month')
//           .format(),
//       });
//     }
//   };

//   handleGetCostsMonth = () => {
//     if (this.props.finance.costs.length > 0) {
//       costsMonth = this.props.finance.costs
//         .filter(
//           item =>
//             moment(item.date).format('YYYYMM') ===
//             moment(this.state.date).format('YYYYMM'),
//         )
//         .reduce((acc, el) => acc + el.amount, 0);
//     }
//     return costsMonth;
//   };

//   handleGetIncomeMonth = () => {
//     if (this.props.finance.incomes.length > 0) {
//       incomesMonth = this.props.finance.incomes
//         .filter(
//           item =>
//             moment(item.date).format('YYYYMM') ===
//             moment(this.state.date).format('YYYYMM'),
//         )
//         .reduce((acc, el) => acc + el.amount, 0);
//     }
//     return incomesMonth;
//   };

//   // handleGetCategories = () => {
//   //   this.props.finance.costs.filter(elem => moment(elem.date).format('YYYYMM') ===
//   //   moment(this.state.date).format('YYYYMM')).map(item=>console.log(item))
//   //   }
//   // };

//   render() {
//     const balance = this.props.finance.balance;
//     const costsMonth = this.handleGetCostsMonth();
//     const incomesMonth = this.handleGetIncomeMonth();
//     return (
//       <div className={s.wrapper}>
//         <StatisticsMenu
//           date={this.state.date}
//           dateRegistration={this.state.dateRegistration}
//           balance={balance}
//           monthChange={this.handleMonthChange}
//         />
//         <StatisticAmounts costsMonth={costsMonth} incomesMonth={incomesMonth} />
//         <CategoriesList />
//         <BarChart labels={labels} data={data} />
//       </div>
//     );
//   }
// }
