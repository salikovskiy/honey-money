import React, { Component } from 'react';
import { connect } from 'react-redux';
import services from '../../services/services';
import { getTransactions, postIncome } from '../../redux/operations';
import { addDateNow } from '../../redux/actions';
import getDateNow from '../../utilities/getDateNow';

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
    // this.props.postIncome({
    //   amount: 300,
    //   date: '01.31.20',
    // });
  };

  render() {

    return <h2>DashboardPage</h2>;
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  getTransactions,
  postIncome,
  addDateNow,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
