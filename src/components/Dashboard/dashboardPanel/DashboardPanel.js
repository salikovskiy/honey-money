import React from 'react';
import PropTypes from 'prop-types';
import styles from './dashboardPanel.module.css';
import TableExample from '../summary/summary';
import AddCost from '../../addCost/AddCost';
import moment from 'moment';
import 'moment/locale/ru';

const dateNow = moment().format();

const monthsSummary = [
  moment(),
  moment(),
  moment(),
  moment(),
  moment(),
  moment(),
]
  .map((date, index) => date.subtract(index, 'months'))
  .map(date => date._d)
  .map(date => moment(date).format('MMMM YYYY'));

console.log(monthsSummary);

const DashboardPanel = () => (
  <div className={styles.dashboardPanel}>
    {window.innerWidth < 768 ? (
      <button className={styles.dashboardPanelBtnMobile} type="button">
        Ввести расход
      </button>
    ) : (
      <div className={styles.dashboardPanel_addCost}>
        <AddCost />
      </div>
    )}
    <div className={styles.dashboardPanel_wrap}>
      <div className={styles.dashboardPanel_Bogdan}></div>
      <div className={styles.dashboardPanel_tableExample}>
        <TableExample />
      </div>
    </div>
  </div>
);

export default DashboardPanel;
