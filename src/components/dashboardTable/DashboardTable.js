import React, { Component } from 'react';
import css from '../dashboardTable/DashBoardTable.module.css';

export default class App extends Component {
  render() {
    if (window.innerWidth < 768) {
      console.log('min 768');
      // modalWindow.innerHTML = modalMobile(data.goal);
      return (
        <div className={css.tableWrapper}>
          <div className={css.tableScroll}>
            <table className={css.table}>
              <thead className={css.thead}>
                <tr className={css.tr}>
                  <th className={css.th}>Расходы</th>
                </tr>
              </thead>
              <tbody className={css.tbody}>
                <tr className={css.tr}>
                  <td className={css.row}>
                    <span className={css.cover}>
                      <p className={css.discription}>Метро</p>
                      <span className={css.date}>30.01.2020</span>
                    </span>
                    <span className={css.categore}>Транспорт</span>
                    <p className={css.price}>
                      -30.00 грн.
                      <button className={css.btn} type="button"></button>
                    </p>
                  </td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.row}>
                    <span className={css.cover}>
                      <p className={css.discription}>Метро</p>
                      <span className={css.date}>30.01.2020</span>
                    </span>
                    <span className={css.categore}>Транспорт</span>
                    <p className={css.price}>
                      -30.00 грн.
                      <button className={css.btn} type="button"></button>
                    </p>
                  </td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.row}>
                    <span className={css.cover}>
                      <p className={css.discription}></p>
                      <span className={css.date}></span>
                    </span>
                    <span className={css.categore}></span>
                    <p className={css.price}></p>
                  </td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.row}>
                    <span className={css.cover}>
                      <p className={css.discription}></p>
                      <span className={css.date}></span>
                    </span>
                    <span className={css.categore}></span>
                    <p className={css.price}></p>
                  </td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.row}>
                    <span className={css.cover}>
                      <p className={css.discription}></p>
                      <span className={css.date}></span>
                    </span>
                    <span className={css.categore}></span>
                    <p className={css.price}></p>
                  </td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.row}>
                    <span className={css.cover}>
                      <p className={css.discription}></p>
                      <span className={css.date}></span>
                    </span>
                    <span className={css.categore}></span>
                    <p className={css.price}></p>
                  </td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.row}>
                    <span className={css.cover}>
                      <p className={css.discription}></p>
                      <span className={css.date}></span>
                    </span>
                    <span className={css.categore}></span>
                    <p className={css.price}></p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1280) {
      // modalWindow.innerHTML = modal(data.goal);
      console.log('max 768');
      return (
        <div className={css.tableWrapper}>
        <div className={css.tableScroll}>
            <table className={css.table}>
              <thead className={css.thead}>
                <tr className={css.tr}>
                  <th className={css.th}>Дата</th>
                  <th className={css.th}>Описание</th>
                  <th className={css.th}>Категория</th>
                  <th className={css.th}>Сумма</th>
                </tr>
              </thead>
              <tbody className={css.tbody}>
                <tr className={css.tr}>
                  <td className={css.td}>30.01.2020</td>
                  <td className={css.td}>Метро</td>
                  <td className={css.td}>Транспорт</td>
                  <td className={css.price}>
                    <span>
                      -30.00 грн.
                      <button className={css.btn} type="button"></button>
                    </span>
                  </td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.td}>30.01.2020</td>
                  <td className={css.td}>Метро</td>
                  <td className={css.td}>Транспорт</td>
                  <td className={css.price}>
                    <span>
                      -30.00 грн.
                      <button className={css.btn} type="button"></button>
                    </span>
                  </td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      console.log('more');
      return (
        <div className={css.tableWrapper}>
        <div className={css.tableScroll}>
            <table className={css.table}>
              <thead className={css.thead}>
                <tr className={css.tr}>
                  <th className={css.th}>Дата</th>
                  <th className={css.th}>Описание</th>
                  <th className={css.th}>Категория</th>
                  <th className={css.th}>Сумма</th>
                </tr>
              </thead>
              <tbody className={css.tbody}>
                <tr className={css.tr}>
                  <td className={css.td}>30.01.2020</td>
                  <td className={css.td}>Метро</td>
                  <td className={css.td}>Транспорт</td>
                  <td className={css.price}>
                    <span>
                      -30.00 грн.
                      <button className={css.btn} type="button"></button>
                    </span>
                  </td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.td}>30.01.2020</td>
                  <td className={css.td}>Метро</td>
                  <td className={css.td}>Транспорт</td>
                  <td className={css.price}>
                    <span>
                      -30.00 грн.
                      <button className={css.btn} type="button"></button>
                    </span>
                  </td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                </tr>
                <tr className={css.tr}>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                  <td className={css.td}></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}
