import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './dashboardPanel.module.css';
import DashboardTable from '../../dashboardTable/DashboardTable';
import TableExample from '../summary/summary';
import AddCost from '../../addCost/AddCost';
import moment from 'moment';
import 'moment/locale/ru';
import { connect } from 'react-redux';
import Axios from 'axios';

let date = moment().format();

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

class DashboardPanel extends Component {
  handleGetSummary = () => {
    const summary = monthsSummary.map(monthTable => {
      return {
        month: moment(monthTable, 'YYYYMM').format('MMMM YYYY'),
        amount: this.props.finance.costs.reduce((acc, cost) => {
          return monthTable === moment(cost.date).format('YYYYMM')
            ? acc + cost.amount
            : acc;
        }, 0),
      };
    });
    return summary;
  };

  handleGetDate = e => {
    console.log(+e.target.parentElement.dataset.month);
  };

  ////////////для Богдана???????????????

  render() {
    const { balance, dateRegistration } = this.props.finance;
    console.log(this.props.postCosts);
    console.log(this.props.finance);
    const summary = this.handleGetSummary();
    console.log(balance);
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
              postCosts={this.props.postCosts}
            />
          </div>
        )}
        <div className={styles.dashboardPanel_wrap}>
          <div className={styles.dashboardPanel_DashboardTable}>
            <DashboardTable />
          </div>
          <div className={styles.dashboardPanel_tableExample}>
            <TableExample
              summary={summary}
              handleGetDate={this.handleGetDate}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPanel);
