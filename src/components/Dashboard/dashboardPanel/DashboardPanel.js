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

//let date = moment().format('YYYYMM');

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
  state = {
    //date: moment().format('YYYYMM'),
    dataTable: [],

    tableState: { costData: '', description: '', category: '', summ: 100 },
    month: moment().format(),
  };

  onHandleTable = e => {
    this.props.finance.costs.map(product => {
      return this.setState({
        tableState: {
          costDate: product.product[date],
          description: product.product.name,
          category: product.product.category.name,
          summ: product.amount,
        },
      });
    });
  };

  handleGetSummary = () => {
    const summary = monthsSummary.map(monthTable => {
      return {
        month: moment(monthTable, 'YYYYMM').format('MMMM YYYY'),
        amount: this.props.finance.costs.reduce((acc, cost) => {
          return monthTable === moment(cost.date).format('YYYYMM')
            ? acc + cost.amount
            : acc;
        }, 0),
        isActive: monthTable === this.state.date,
      };
    });
    return summary;
  };

  handleGetDate = e => {
    //console.log('event.target', e.target.parentElement.dataset.month);
    // this.setState({
    //   date: e.target.parentElement.dataset.month,
    // });

    let x = [];
    this.props.finance.costs.map(
      elem =>
        moment(elem.date).format('YYYYMM') ===
          e.target.parentElement.dataset.month &&
        (x = [
          ...x,
          {
            date: elem.date,
            description: elem.product.name,
            category: elem.product.category.name,
            amount: elem.amount,
            id: elem.costsId,
          },
        ]),
    );
    this.setState({
      dataTable: x,
    });
  };

  render() {
    const balance = this.props.finance.balance;
    const dateRegistration = this.props.finance.authReducer.createdAt;
    const { costDate, description, category, summ } = this.state.tableState;
    console.log(this.props.finance.costs);
    const { balance, dateRegistration } = this.props.finance;
    const summary = this.handleGetSummary();
    console.log(this.props.finance);

    console.log('state data', this.state.dataTable);
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
              products={['']}
            />
          </div>
        )}
        <div className={styles.dashboardPanel_wrap}>
          <div className={styles.dashboardPanel_DashboardTable}>
            <DashboardTable dataTable={this.state.dataTable} />
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
