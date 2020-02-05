import React, { Component } from 'react';
import s from './StatisticsPage.module.css';
import StatisticsMenu from '../../components/statisticsMenu/StatisticsMenu';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
// import moment from 'moment';
import axios from 'axios';
import { getCategories } from '../../redux/operations';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMzgyMmUxZDhlYTczMmRjMDUyZjhiMiIsImlhdCI6MTU4MDczNzI1MH0.rgk-RatweAQ4V93o79stvV_fmkjl3sJqiraciOU5qD0';

class StatisticsPage extends Component {
  state = {
    // Хранить в стейте какая именно категория
    // выбрана и текущуюю дату (по ней определяется месяц)
    selectedCategory: '',
    currentDate: '',
  };

  componentDidMount() {
    // GET запросы:
    // 1) получение данных по категриям;
    // axios
    //   .get('https://smart-finance.goit.co.ua/api/v1/categories', {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then(data => data.data.categories.map(item => console.log(item.name)));
  }

  // Написать операцию (ГЕТ запрос) с измененным
  // месяцем и текущей категорией в стейте и прокинуть
  // в StatisticsMenu на переключение месяцев

  componentDidUpdate() {
    // Из текущего массива расходов, формирует каждый
    // раз в componentDidUpdate объект категории и
    // суммарной сумме по данной категории и передает
    // его пропом в ChartStatisticByCategory для
    // отображения  (формат объекта согласовать с тем
    //   кто будет делать ChartStatisticByCategory)
  }

  render() {
    // Компонент рендерит: StatisticMenu, StatisticAmounts,
    // CategoriesList, Chart
    return (
      <div className={s.wrapper}>
        <div className={s.header}>Header</div>
        <StatisticsMenu />
        <div className={s.statistic_amounts}>StatisticAmounts</div>
        <CategoriesList />
        <div className={s.chart}>Chart</div>
      </div>
    );
  }
}

export default StatisticsPage;
