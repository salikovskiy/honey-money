import React from 'react';
import css from '../summary/summary.module.css';

export default function TableExample(props) {
  return (
    <div>
      <table className={css.table_price}>
        <caption>СВОДКА РАСХОДОВ</caption>

        <tbody>
          <tr>
            <td className={css.mounth}>Грудень 2019</td>
            <td className={css.price}>100грн</td>
          </tr>
          <tr>
            <td className={css.mounth}>Січень 2019</td>
            <td className={css.price}>50.00 грн</td>
          </tr>
          <tr>
            <td className={css.mounth}>Лютий 2019</td>
            <td className={css.price}>100.00 грн</td>
          </tr>
          <tr>
            <td className={css.mounth}>Березень 2019</td>
            <td className={css.price}>3000.00 грн</td>
          </tr>
          <tr>
            <td className={css.mounth}>Квітень 2019</td>
            <td className={css.price}>1000.00 грн</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
