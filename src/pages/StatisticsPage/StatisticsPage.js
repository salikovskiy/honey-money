import React, { Component } from 'react';
import s from './StatisticsPage.module.css';
import { connect } from 'react-redux';
import { getCategories } from '../../redux/statistics/statisticsOperations';
import StatisticsMenu from '../../components/statisticsMenu/StatisticsMenu';
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
  };

  componentDidMount() {
    console.log('this.props', this.props);
    this.props.getCategories();
    // console.log('componentDidMount', this.props.getCategories());
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

  // передать пропами обьект data в CategoriesList

  render() {
    const { currentDate } = this.state;
    // Компонент рендерит: StatisticMenu, StatisticAmounts,
    // CategoriesList, Chart
    return (
      <div className={s.wrapper}>
        <div className={s.header}>Header</div>
        <StatisticsMenu currentDate={currentDate} />
        <div className={s.statistic_amounts}>StatisticAmounts</div>
        <CategoriesList />
        <div className={s.chart}>Chart</div>
      </div>
    );
  }
}

const MSTP = state => state;

const MDTP = {
  getCategories,
};

export default connect(MSTP, MDTP)(StatisticsPage);
