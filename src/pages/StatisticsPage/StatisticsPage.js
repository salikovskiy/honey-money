import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../../redux/statistics/statisticsOperations';
import StatisticsMenu from '../../components/statisticsMenu/StatisticsMenu';
import StatisticAmounts from '../../components/statisticAmounts/StatisticAmounts';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import BarChart from '../../components/barChart/BarChart';
import moment from 'moment';
import s from './StatisticsPage.module.css';

let costsMonth = 0;
let incomesMonth = 0;
const dateNow = moment().format();

class StatisticsPage extends Component {
  state = {
    selectedCategory: 'Все категории',
    date: dateNow,
    dateRegistration: this.props.finance.authReducer.createdAt,
    costsData: [],
    allCategoriesCostsData: [],
  };

  async componentDidMount() {
    await this.props.getCategories();

    this.setState({
      currentDate: moment()
        .format('MMMM YYYY')
        .toUpperCase(),

      costsData: this.props.finance.categories.map(item => {
        return {
          _id: item._id,
          name: item.name,
          amount: this.props.finance.costs
            .filter(el => el.product.category.name === item.name)
            .reduce((acc, cur) => acc + cur.amount, 0),
        };
      }),

      allCategoriesCostsData: this.props.finance.categories.map(item => {
        return {
          _id: item._id,
          name: item.name,
          amount: this.props.finance.costs
            .filter(el => el.product.category.name === item.name)
            .reduce((acc, cur) => acc + cur.amount, 0),
        };
      }),
    });
  }

  async componentDidUpdate() {
    if (
      this.state.selectedCategory === 'Все категории' &&
      this.state.costsData.length !== this.state.allCategoriesCostsData.length
    ) {
      this.setState({
        allCategoriesCostsData: this.props.finance.categories.map(item => {
          return {
            _id: item._id,
            name: item.name,
            amount: this.props.finance.costs
              .filter(el => el.product.category.name === item.name)
              .reduce((acc, cur) => acc + cur.amount, 0),
          };
        }),
      });
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

  selectCategoryClick = id => {
    this.setState(prevState => ({
      selectedCategory:
        prevState.selectedCategory ===
        this.props.finance.categories.find(category => category._id === id).name
          ? 'Все категории'
          : this.props.finance.categories.find(category => category._id === id)
              .name,
    }));
  };

  render() {
    const balance = this.props.finance.balance;
    const costsMonth = this.handleGetCostsMonth();
    const incomesMonth = this.handleGetIncomeMonth();
    const categories = this.props.finance.categories;
    const selectedCategory = this.state.selectedCategory;
    const { costsData } = this.state;

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
        <CategoriesList
          categoriesData={costsData}
          selectCategoryClick={this.selectCategoryClick}
        />
        {costsData.length !== 0 && (
          <BarChart
            data={
              this.state.selectedCategory === 'Все категории'
                ? this.state.allCategoriesCostsData
                : costsData
            }
            selectedCategory={selectedCategory}
          />
        )}
      </div>
    );
  }
}

const MSTP = state => state;

const MDTP = {
  getCategories,
};

export default connect(MSTP, MDTP)(StatisticsPage);
