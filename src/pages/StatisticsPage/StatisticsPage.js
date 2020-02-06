import React, { Component } from 'react';
import s from './StatisticsPage.module.css';
import { connect } from 'react-redux';
import { getCategories } from '../../redux/statistics/statisticsOperations';
import StatisticsMenu from '../../components/statisticsMenu/StatisticsMenu';
import StatisticAmounts from './../../components/statisticAmounts/StatisticAmounts';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import moment from 'moment';

class StatisticsPage extends Component {
  state = {
    // Хранить в стейте какая именно категория
    // выбрана и текущуюю дату (по ней определяется месяц)
    selectedCategory: 'продукты',
    currentDate: moment()
      .format('MMMM YYYY')
      .toUpperCase(),
    allCategories: [],
  };

  componentDidMount() {
    // console.log('this.props :', this.props);
    this.setState({ allCategories: [1, 2, 3] });
  }

  // Написать операцию (ГЕТ запрос) с измененным
  // месяцем и текущей категорией в стейте и прокинуть
  // в StatisticsMenu на переключение месяцев

  componentDidUpdate() {
    console.log('this.props2222', this.props);
    // Из текущего массива расходов, формирует каждый
    // раз в componentDidUpdate объект категории и
    // суммарной сумме по данной категории и передает
    // его пропом в ChartStatisticByCategory для
    // отображения  (формат объекта согласовать с тем
    //   кто будет делать ChartStatisticByCategory)
  }

  // передать пропами data в StatisticAmounts

  // передать пропами сумму расходов в CategoriesList

  render() {
    console.log('this.props rrrrrrrrr:', this.props);
    const { currentDate } = this.state;
    // Компонент рендерит: StatisticMenu, StatisticAmounts,
    // CategoriesList, Chart
    return (
      <div className={s.wrapper}>
        <div className={s.header}>Header</div>
        <StatisticsMenu currentDate={currentDate} />
        <StatisticAmounts />
        <CategoriesList />
        <div className={s.chart}>Chart</div>
      </div>
    );
  }
}

const MSTP = state => state.categories;

const MDTP = {
  getCategories,
};

export default connect(MSTP, MDTP)(StatisticsPage);
