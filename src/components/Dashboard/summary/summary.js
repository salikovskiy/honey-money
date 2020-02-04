import React from 'react';
import css from '../summary/summary.module.css';

export default function TableExample(props) {
  return (
    <div>
      <table className={css.table_price}>
        <caption>СВОДКА РАСХОДОВ</caption>

        <tbody>
          {this.props.summery.map(item => (
            <tr
              data-month={this.props.month}
              className={css.tr}
              onClick={this.props.handleGetDate}
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
