import React from 'react';
import PropTypes from 'prop-types';
import styles from './dashboardPanel.module.css';
import TableExample from '../summary/summary';

const DashboardPanel = () => (
  <div className={styles.dashboardPanel}>
    <button className={styles.dashboardPanelBtnMobile} type="button">
      Ввести расход
    </button>
    <div className={styles.dashboardPanel_Olya}></div>
    <div className={styles.dashboardPanel_Bogdan}></div>
    <div className={styles.dashboardPanel_Den}>
      <TableExample />
    </div>
  </div>
);

export default DashboardPanel;
