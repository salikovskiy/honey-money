import React, { Component } from 'react';
import { connect } from 'react-redux';
import services from '../../services/services';
import { getTransactions, postIncome } from '../../redux/operations';
import getDateNow from '../../utilities/getDateNow';
import AddCostAppTest from '../../components/addCost/AddCostAppTest';

class DashboardPage extends Component {
  state = {
    isOpenModalIncome: false,
  };

  onChangeModalIncome = () => {
    this.setState(state => ({ isOpenModalIncome: !state.isOpenModalIncome }));
  };

  componentDidMount = () => {
    //     console.log(this.props.finance);
    console.log(getDateNow());
    // this.props.getTransactions();
  };

  render() {
    // services.addIncome().then(data => console.log(data));
    return (
      <>
        <h2>DashboardPage</h2>
        <AddCostAppTest />
      </>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  getTransactions,
  postIncome,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
