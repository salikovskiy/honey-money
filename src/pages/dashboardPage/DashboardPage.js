import React, { Component } from 'react';
import { connect } from 'react-redux';
import services from '../../services/services';
import { getTransactions, postIncome } from '../../redux/operations';
import getDateNow from '../../utilities/getDateNow';
import DashboardMenu from '../../components/DashboardMenu/DashboardMenu';

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
    return <DashboardMenu />;
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  getTransactions,
  postIncome,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
