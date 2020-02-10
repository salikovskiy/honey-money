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
    selectedCategory: 'продукты',
    currentDate: '',
    // allCategories: [],
    date: dateNow,
    dateRegistration: this.props.finance.authReducer.createdAt,
   labels: []
  };

  async componentDidMount() {
    this.setState({
      currentDate: moment()
        .format('MMMM YYYY')
        .toUpperCase(),
    });
    const data =  await this.props.getCategories();
  //   const labels = await data.map(elem=>elem.name)
  //  this.setState({labels})
    console.log('DATAAAAAAAAAAA', this.props.finance.categories.map(elem=>elem.name));
    const labels = this.props.finance.categories.map(elem=>elem.name)
 
  }

 async componentDidUpdate(prevProps, prevState) {
    // console.log('this.props2222', this.props.finance.categories);
    if(JSON.stringify(prevState.labels) !== JSON.stringify(this.state.labels)) {
  //     const data =  await this.props.getCategories();
  //   const labels = await data.map(elem=>elem.name)
  //  this.setState({labels})
  console.log("YESS")
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
    console.log("LABELS",this.state.labels)
    const balance = this.props.finance.balance;
    const costsMonth = this.handleGetCostsMonth();
    const incomesMonth = this.handleGetIncomeMonth();
    const categories = this.props.finance.categories;
    console.log('3333333333333333 :', categories);

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
        <CategoriesList categories={categories} />
        <BarChart labels={this.props.finance.categories.map(elem=>elem.name)} data={data} />
      </div>
    );
  }
}

const MSTP = state => state;

const MDTP = {
  getCategories,
};

export default connect(MSTP, MDTP)(StatisticsPage);
