import React from 'react';
// import PropTypes from 'prop-types';
import styles from './dashboardPanel.module.css';
import TableExample from '../summary/summary';
import AddCost from '../../addCost/AddCost';

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
