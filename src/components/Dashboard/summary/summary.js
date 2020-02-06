import React from 'react';
import css from '../summary/summary.module.css';
import moment from 'moment';
import shortid from 'shortid';
export default function TableExample({ summary, handleGetDate }) {
  return (
    <div>
      <table className={css.table_price}>
        <caption>СВОДКА РАСХОДОВ</caption>
        <tbody>
          {summary.map(item => (
            <tr
              id={shortid()}
              key={shortid()}
              data-month={moment(item.month, 'MMMM YYYY').format('YYYYMM')}
              className={item.isActive ? css.orange : css.tr}
              onClick={handleGetDate}
            >
              <td className={css.mounth}>{item.month}</td>
              <td className={css.price}>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
