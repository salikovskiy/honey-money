import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTransactions, postIncome } from '../../redux/operations';
import { addDateNow } from '../../redux/actions';
import getDateNow from '../../utilities/getDateNow';
import DashboardPanel from '../../components/Dashboard/dashboardPanel/DashboardPanel';

class DashboardPage extends Component {
  state = {
    isOpenModalIncome: false,
  };

  onChangeModalIncome = () => {
    this.setState(state => ({ isOpenModalIncome: !state.isOpenModalIncome }));
  };

  componentDidMount = () => {
    console.log(this.props.finance);
    this.props.addDateNow(getDateNow());
    this.props.getTransactions();
  };

  render() {

    return (
      <>
        <h2>DashboardPage</h2>
        <DashboardPanel />
      </>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  getTransactions,
  postIncome,
  addDateNow,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
