import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTransactions, postIncome } from '../../redux/operations';
import { addDateNow } from '../../redux/actions';
import getDateNow from '../../utilities/getDateNow';
<<<<<<< HEAD
import DashboardMenu from '../../components/DashboardMenu/DashboardMenu';
=======
import DashboardPanel from '../../components/Dashboard/dashboardPanel/DashboardPanel';
import AddIncome from '../../components/addIncome/AddIncome';
>>>>>>> dev

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
<<<<<<< HEAD
    // services.addIncome().then(data => console.log(data));
    return <DashboardMenu />;
=======
    const { isOpenModalIncome } = this.state;
    return (
      <>
        <h2>DashboardPage</h2>
        {isOpenModalIncome && (
          <AddIncome closeModal={this.onChangeModalIncome} />
        )}
        <DashboardPanel />
      </>
    );
>>>>>>> dev
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  getTransactions,
  postIncome,
  addDateNow,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
