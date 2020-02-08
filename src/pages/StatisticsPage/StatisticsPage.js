import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../../redux/statistics/statisticsOperations';
import StatisticsMenu from '../../components/statisticsMenu/StatisticsMenu';
import StatisticAmounts from '../../components/statisticAmounts/StatisticAmounts';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import BarChart from '../../components/barChart/BarChart';
import moment from 'moment';
import s from './StatisticsPage.module.css';

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'January',
  'February',
  'March',
];
const data = [65, 59, 80, 11, 56, 55, 40, 3, 59, 80];

// class StatisticsPage extends Component {
//   state = {
//     // Хранить в стейте какая именно категория
//     // выбрана и текущуюю дату (по ней определяется месяц)
//     selectedCategory: 'продукты',
//     currentDate: '',
//     allCategories: [],
//   };

//   async componentDidMount() {
//     this.setState({
//       currentDate: moment()
//         .format('MMMM YYYY')
//         .toUpperCase(),
//     });
//     const data = await getCategories();
//     console.log('data :', data);
//   }

//   // Написать операцию (ГЕТ запрос) с измененным
//   // месяцем и текущей категорией в стейте и прокинуть
//   // в StatisticsMenu на переключение месяцев

//   componentDidUpdate() {
//     // console.log('this.props2222', this.props);
//     // Из текущего массива расходов, формирует каждый
//     // раз в componentDidUpdate объект категории и
//     // суммарной сумме по данной категории и передает
//     // его пропом в ChartStatisticByCategory для
//     // отображения  (формат объекта согласовать с тем
//     //   кто будет делать ChartStatisticByCategory)
//   }

//   // передать пропами data в StatisticAmounts

//   // передать пропами сумму расходов в CategoriesList

//   render() {
//     const { currentDate } = this.state;
//     // Компонент рендерит: StatisticMenu, StatisticAmounts,
//     // CategoriesList, Chart
//     return (
//       <div className={s.wrapper}>
//         <StatisticsMenu currentDate={currentDate} />
//         <StatisticAmounts />
//         <CategoriesList />
//         <BarChart labels={labels} data={data} />
//       </div>
//     );
//   }
// }

let costsSum = 0;
let incomesSum = 0;

const dateNow = moment().format();

class StatisticsPage extends Component {
  state = {
    date: dateNow,
    dateRegistration: this.props.finance.authReducer.createdAt,
    costs: this.props.finance.costs,
    incomes: this.props.finance.incomes,
  };

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

  handleGetSumCosts = () => {
    if (this.state.costs.length > 0) {
      costsSum = this.state.costs
        .filter(
          item =>
            moment(item.date).format('YYYYMM') ===
            moment(this.state.date).format('YYYYMM'),
        )
        .reduce((acc, el) => acc + el.amount, 0);
    }
    return costsSum;
  };

  handleGetSumIncome = () => {
    if (this.state.incomes.length > 0) {
      incomesSum = this.state.incomes
        .filter(
          item =>
            moment(item.date).format('MMMM YYYY') ===
            moment(this.state.date).format('MMMM YYYY'),
        )
        .reduce((acc, el) => acc + el.amount, 0);
    }
    return incomesSum;
  };

  render() {
    const balance = this.props.finance.balance;
    const costsSum = this.handleGetSumCosts();
    const incomesSum = this.handleGetSumIncome();
    // console.log(costsSum);
    // console.log(incomesSum);
    // console.log(this.state.costs);
    // console.log(this.state.incomes);
    console.log(this.props.finance);
    return (
      <div className={s.wrapper}>
        <StatisticsMenu
          date={this.state.date}
          dateRegistration={this.state.dateRegistration}
          balance={balance}
          monthChange={this.handleMonthChange}
        />
        <StatisticAmounts costsSum={costsSum} incomesSum={incomesSum} />
        <CategoriesList />
        <BarChart labels={labels} data={data} />
      </div>
    );
  }
}

const MSTP = state => state;

const MDTP = {
  getCategories,
};

export default connect(MSTP, MDTP)(StatisticsPage);
