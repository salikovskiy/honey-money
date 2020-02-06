import React, { Component } from 'react';
import styles from './dashboardPanel.module.css';
import DashboardTable from '../../dashboardTable/DashboardTable';
import TableExample from '../summary/summary';
import AddCost from '../../addCost/AddCost';
import moment from 'moment';
import 'moment/locale/ru';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
    date: moment().format('YYYYMM'),
    dataTable: [],
    isOpenModalCosts: false,
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

  componentDidMount() {
    this.handleGetDataTable();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.date !== this.state.date) {
      this.handleGetDataTable();
    }
  }

  handleOpenModalCosts = () => {
    this.setState(state => ({ isOpenModalCosts: !state.isOpenModalCosts }));
  };

  handleGetDate = e => {
    this.setState({
      date: e.target.parentElement.dataset.month,
    });
  };

  handleGetDataTable = () => {
    let arr = [];
    this.props.finance.costs.map(
      elem =>
        moment(elem.date).format('YYYYMM') === this.state.date &&
        (arr = [
          ...arr,
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
      dataTable: arr,
    });
  };

  render() {
    const balance = this.props.finance.balance;
    const token = this.props.finance.authReducer.token;
    const dateRegistration = this.props.finance.authReducer.createdAt;
    const summary = this.handleGetSummary();
    //console.log(summary);
    // console.log(this.props.finance;
    // console.log('state date', this.state.date);
    // console.log('state data', this.state.dataTable);
    return (
      <div className={styles.dashboardPanel}>
        {window.innerWidth < 768 && (
          <button
            className={styles.dashboardPanelBtnMobile}
            type="button"
            onClick={this.handleOpenModalCosts}
          >
            Ввести расход
          </button>
        )}
        {this.state.isOpenModalCosts && (
          <div className={styles.dashboardPanel_addCost}>
            <AddCost
              balance={balance}
              dateRegistration={dateRegistration}
              postCosts={this.props.postCosts}
              token={token}
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
