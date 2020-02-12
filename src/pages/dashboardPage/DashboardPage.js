import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTransactions, postIncome, postCosts } from '../../redux/operations';
import { addDateNow } from '../../redux/actions';
import getDateNow from '../../utilities/getDateNow';
import DashboardMenu from '../../components/DashboardMenu/DashboardMenu';
import DashboardPanel from '../../components/Dashboard/dashboardPanel/DashboardPanel';
// import DashboardTable from '../../components/dashboardTable/DashboardTable';
import AddIncome from '../../components/addIncome/AddIncome';

class DashboardPage extends Component {
  state = {
    isOpenModalIncome: false,
  };

  onChangeModalIncome = () => {
    this.setState(state => ({ isOpenModalIncome: !state.isOpenModalIncome }));
  };

  componentDidMount = () => {
    this.props.addDateNow(getDateNow());
    this.props.getTransactions();
  };

  render() {
    const { isOpenModalIncome } = this.state;
    const date = this.props.finance.authReducer.createdAt;
    const postIncome = this.props.postIncome;
    const balance = this.props.finance.balance;
    const postCosts = this.props.postCosts;
    return (
      <>
        <DashboardMenu
          changeModal={this.onChangeModalIncome}
          balance={balance}
          date={date}
        />
        {isOpenModalIncome && (
          <AddIncome
            isOpen={this.onChangeModalIncome}
            date={date}
            addIncome={postIncome}
          />
        )}
        <DashboardPanel postCosts={postCosts} />
      </>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  getTransactions,
  postIncome,
  addDateNow,
  postCosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
