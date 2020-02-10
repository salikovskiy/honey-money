import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../../redux/statistics/statisticsOperations';
import StatisticsMenu from '../../components/statisticsMenu/StatisticsMenu';
import StatisticAmounts from '../../components/statisticAmounts/StatisticAmounts';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import BarChart from '../../components/barChart/BarChart';
import moment from 'moment';
import s from './StatisticsPage.module.css';

const data = [65, 59, 80, 11, 56, 55, 40, 3, 59, 80, 90];

let costsMonth = 0;
let incomesMonth = 0;
const dateNow = moment().format();

class StatisticsPage extends Component {
  state = {
    selectedCategory: 'Все категории',
    date: dateNow,
    dateRegistration: this.props.finance.authReducer.createdAt,
    statisticListData: [],
  };

  async componentDidMount() {
    this.setState({
      currentDate: moment()
        .format('MMMM YYYY')
        .toUpperCase(),
    });

    console.log('this.props.finance:', this.props.finance);
    let amount = 0;
    this.setState({
      statisticListData: this.props.finance.categories.map(el => {
        this.props.finance.costs.map(item => {
          if (el.name === item.product.category.name) {
            console.log('el2345678 :', (amount += item.amount));
            amount = item.amount;
            // console.log('el name :', el.name);
            // console.log('object :', el.amount);
            // x = item.amount.reduce((acc, cur) => acc + cur, 0);
          } else {
            amount = 0;
          }
        });
        return {
          name: el.name,
          id: el._id,
          amount,
        };
      }),
    });

    await this.props.getCategories();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      JSON.stringify(prevState.labels) !== JSON.stringify(this.state.labels)
    ) {
      // const data = await this.props.getCategories();
      // const labels = await data.map(elem => elem.name);
      // this.setState({ labels });
    }
  }

  handleMonthChange = e => {
    if (e.target.name === 'leftBtn') {
      this.setState({
        date: moment(this.state.date)
          .add(-1, 'month')
          .format(),
      });
    }

    if (e.target.name === 'rightBtn') {
      this.setState({
        date: moment(this.state.date)
          .add(+1, 'month')
          .format(),
      });
    }
  };

  handleGetCostsMonth = () => {
    if (this.props.finance.costs.length > 0) {
      costsMonth = this.props.finance.costs
        .filter(
          item =>
            moment(item.date).format('YYYYMM') ===
            moment(this.state.date).format('YYYYMM'),
        )
        .reduce((acc, el) => acc + el.amount, 0);
    }
    return costsMonth;
  };

  handleGetIncomeMonth = () => {
    if (this.props.finance.incomes.length > 0) {
      incomesMonth = this.props.finance.incomes
        .filter(
          item =>
            moment(item.date).format('YYYYMM') ===
            moment(this.state.date).format('YYYYMM'),
        )
        .reduce((acc, el) => acc + el.amount, 0);
    }
    return incomesMonth;
  };

  render() {
    const balance = this.props.finance.balance;
    const costsMonth = this.handleGetCostsMonth();
    const incomesMonth = this.handleGetIncomeMonth();
    const categories = this.props.finance.categories;
    const selectedCategory = this.state.selectedCategory;
    const { statisticListData } = this.state;
    console.log('statisticListData :', statisticListData);

    return (
      <div className={s.wrapper}>
        <StatisticsMenu
          date={this.state.date}
          dateRegistration={this.state.dateRegistration}
          balance={balance}
          monthChange={this.handleMonthChange}
        />
        <StatisticAmounts
          categories={categories}
          costsMonth={costsMonth}
          incomesMonth={incomesMonth}
        />
        <CategoriesList categoriesData={statisticListData} />
        <BarChart
          labels={this.props.finance.categories.map(elem => elem.name)}
          data={data}
          selectedCategory={selectedCategory}
        />
      </div>
    );
  }
}

const MSTP = state => state;

const MDTP = {
  getCategories,
};

export default connect(MSTP, MDTP)(StatisticsPage);
