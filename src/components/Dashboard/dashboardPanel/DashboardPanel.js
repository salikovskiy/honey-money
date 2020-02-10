import React, { Component } from 'react';
import styles from './dashboardPanel.module.css';
import DashboardTable from '../../dashboardTable/DashboardTable';
import TableExample from '../summary/summary';
import AddCost from '../../addCost/AddCost';
import moment from 'moment';
import 'moment/locale/ru';
import { connect } from 'react-redux';
import { deleteCosts } from '../../../redux/operations';
import ModalDashboardTable from '../../dashboardTable/modalDashboardTable/ModalDashboardTable';
//import PropTypes from 'prop-types';

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
    dataCosts: this.props.finance.costs,
    isOpenModalCosts: false,
    isOpenModalTable: false,
    id: '',
    deleteId: '',
  };

  componentDidMount() {
    this.handleGetDataTable();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.date !== this.state.date ||
      prevState.dataTable.length !== this.state.dataTable.length ||
      prevState.dataCosts.length !== this.state.dataCosts.length ||
      prevProps.finance.costs.length !== this.props.finance.costs.length
    ) {
      this.handleGetDataTable();
    }
  }

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

  handleChangeModalCosts = () => {
    this.setState(state => ({ isOpenModalCosts: !state.isOpenModalCosts }));
  };

  handlegetIdTable = e => {
    e.persist();
    this.setState({
      id: e.target.id,
      deleteId: e.target.value,
    });
  };

  handleChangeModal = () => {
    this.setState(state => ({ isOpenModalTable: !state.isOpenModalTable }));
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
            forDeleteId: elem.forDeleteId,
          },
        ]),
    );
    this.setState({
      dataTable: arr.reverse(),
    });
  };

  render() {
    const balance = this.props.finance.balance;
    const token = this.props.finance.authReducer.token;
    const dateRegistration = this.props.finance.authReducer.createdAt;
    const summary = this.handleGetSummary();
    const dataTable = this.state.dataTable;
    return (
      <div className={styles.dashboardPanel}>
        {window.innerWidth < 768 && (
          <button
            className={styles.dashboardPanelBtnMobile}
            type="button"
            onClick={this.handleChangeModalCosts}
          >
            Ввести расход
          </button>
        )}
        {this.state.isOpenModalCosts && (
          <div className={styles.overlay_addCost}>
            <div className={styles.dashboardPanel_addCost}>
              <AddCost
                balance={balance}
                dateRegistration={dateRegistration}
                postCosts={this.props.postCosts}
                token={token}
                closeModal={this.handleChangeModalCosts}
              />
            </div>
          </div>
        )}
        {window.innerWidth > 767 && (
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
            {this.state.isOpenModalTable && (
              <ModalDashboardTable
                handleChangeModal={this.handleChangeModal}
                changeModal={this.handlegetIdTable}
                id={this.state.id}
                forDeleteId={this.state.deleteId}
                deleteCost={this.props.deleteCosts}
              />
            )}
            <DashboardTable
              dataTable={dataTable}
              changeModal={this.handlegetIdTable}
              handleChangeModal={this.handleChangeModal}
            />
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

const mapDispatchToProps = {
  deleteCosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPanel);
