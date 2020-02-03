import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './dashboardPanel.module.css';
import TableExample from '../summary/summary';
import AddCost from '../../addCost/AddCost';
import moment from 'moment';
import 'moment/locale/ru';
import services from '../../../services/services';

//const dateNow = moment().format();

///Для Дениса - объект с месяцем и расходом за месяц

const monthsSummary = [
  moment(),
  moment(),
  moment(),
  moment(),
  moment(),
  moment(),
]
  .map((date, index) => date.subtract(index, 'months'))
  .map(date => moment(date).format('YYYYMM'));
//.map(date => moment(date._d).format('MMMM YYYY')); ////строка????

console.log(monthsSummary);

///получаем дату расходов
///нужно сравнить ее с датой, сложить расходы и отрисовать. КАК??????

// {this.state.costs.map(cost => moment(cost.date).format('YYYYMM'))}

class DashboardPanel extends Component {
  state = {
    costs: [],
  };

  componentDidMount() {
    services
      .getAllTransactions(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMzMxZTlmZDhlYTczMmRjMDUyZjg4ZSIsImlhdCI6MTU4MDQwODQ3OX0.jsQIyYLooWf1ryjqXuzrKLQ8Rcxb1nSxJw1IuFmqYV0',
      )
      .then(data => this.setState({ costs: data.data.costs }));
  }

  handleGetSummary = () => {
    monthsSummary.map(monthTable => {
      return {
        month: monthTable,
        amount: this.state.costs.map(cost =>
          moment(cost.date).format('YYYYMM') === monthTable
            ? console.log(monthTable, cost.amount)
            : console.log('noooo'),
        ),
      };
    });
  };

  render() {
    this.handleGetSummary();
    console.log(this.state.costs);
    return (
      <div className={styles.dashboardPanel}>
        {window.innerWidth < 768 ? (
          <button className={styles.dashboardPanelBtnMobile} type="button">
            Ввести расход
          </button>
        ) : (
          <div className={styles.dashboardPanel_addCost}>
            <AddCost />
          </div>
        )}
        <div className={styles.dashboardPanel_wrap}>
          <div className={styles.dashboardPanel_Bogdan}></div>
          <div className={styles.dashboardPanel_tableExample}>
            <TableExample />
          </div>
        </div>
      </div>
    );
  }
}

// const DashboardPanel = () => (
//   <div className={styles.dashboardPanel}>
//     {window.innerWidth < 768 ? (
//       <button className={styles.dashboardPanelBtnMobile} type="button">
//         Ввести расход
//       </button>
//     ) : (
//       <div className={styles.dashboardPanel_addCost}>
//         <AddCost />
//       </div>
//     )}
//     <div className={styles.dashboardPanel_wrap}>
//       <div className={styles.dashboardPanel_Bogdan}></div>
//       <div className={styles.dashboardPanel_tableExample}>
//         <TableExample />
//       </div>
//     </div>
//   </div>
// );

export default DashboardPanel;
