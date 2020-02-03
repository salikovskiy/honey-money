import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './dashboardPanel.module.css';
import TableExample from '../summary/summary';
import AddCost from '../../addCost/AddCost';
import moment from 'moment';
import 'moment/locale/ru';
import services from '../../../services/services';

//const dateNow = moment().format();

const monthsSummary = [
  moment(new Date()),
  moment(new Date()),
  moment(new Date()),
  moment(new Date()),
  moment(new Date()),
  moment(new Date()),
]
  .map((date, index) => date.subtract(index, 'months'))
  .map(date => moment(date).format('YYYYMM'));

class DashboardPanel extends Component {
  handleGetSummary = () => {
    const summary = monthsSummary.map(monthTable => {
      return {
        month: moment(monthTable, 'YYYYMM').format('MMMM YYYY'),
        amount: this.props.costs.reduce((acc, cost) => {
          return monthTable === moment(cost.date).format('YYYYMM')
            ? acc + cost.amount
            : acc;
        }, 0),
      };
    });
    return summary;
  };
  /////////////////////???????????????????????функция для Оли
  handleAddCosts = (token, obj) => {
    services.addCosts(token, obj);
  };

  ////////////для Богдана???????????????

  render() {
    const summary = this.handleGetSummary();
    const balance = this.props.balance;
    const dateRegistration = this.props.dateRegistration;
    const token = this.props.token;
    //console.log(dateRegistration);
    return (
      <div className={styles.dashboardPanel}>
        {window.innerWidth < 768 ? (
          <button className={styles.dashboardPanelBtnMobile} type="button">
            Ввести расход
          </button>
        ) : (
          <div className={styles.dashboardPanel_addCost}>
            <AddCost
              balance={balance}
              dateRegistration={dateRegistration}
              token={token}
            />
          </div>
        )}
        <div className={styles.dashboardPanel_wrap}>
          <div className={styles.dashboardPanel_Bogdan}></div>
          <div className={styles.dashboardPanel_tableExample}>
            <TableExample summary={summary} />
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardPanel;
