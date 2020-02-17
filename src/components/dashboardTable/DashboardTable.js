import React from 'react';
import css from '../dashboardTable/DashBoardTable.module.css';
import moment from 'moment';
// import ModalDashboardTable from "../dashboardTable/modalDashboardTable/ModalDashboardTable"

const DashboardTable = ({ dataTable, changeModal, handleChangeModal }) => {
  if (window.innerWidth < 768) {
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
              {dataTable.map(item => (
                <tr className={css.tr} id={item.idForDelete} key={item.id}>
                  <td className={css.row}>
                    <span className={css.cover}>
                      <p className={css.discription}>{item.description}</p>
                      <span className={css.date}>
                        {moment(item.date).format('DD.MM.YY')}
                      </span>
                    </span>
                    <span className={css.categore}>{item.category}</span>
                    <span className={css.overModile}>
                      <span className={css.price}>{item.amount}</span>
                      <span>
                        <button
                          value={item.forDeleteId}
                          id={item.id}
                          onClick={e => {
                            changeModal(e);
                            handleChangeModal();
                          }}
                          className={css.btn}
                          type="button"
                        ></button>
                      </span>
                    </span>
                  </td>
                </tr>
              ))}
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
              {dataTable.map(item => (
                <tr className={css.tr} id={item.idForDelete} key={item.id}>
                  <td className={css.td}>
                    {moment(item.date).format('DD.MM.YY')}
                  </td>
                  <td className={css.td}>{item.description}</td>
                  <td className={css.td}>{item.category}</td>
                  <td className={css.price}>
                    <span className={css.overlay}>
                      <span>{item.amount}</span>
                      <span>
                        <button
                          value={item.forDeleteId}
                          id={item.id}
                          onClick={e => {
                            changeModal(e);
                            handleChangeModal();
                          }}
                          className={css.btn}
                          type="button"
                        ></button>
                      </span>
                    </span>
                  </td>
                </tr>
              ))}
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
              {dataTable.map(item => (
                <tr className={css.tr} id={item.idForDelete} key={item.id}>
                  <td className={css.td}>
                    {moment(item.date).format('DD.MM.YY')}
                  </td>
                  <td className={css.td}>{item.description}</td>
                  <td className={css.td}>{item.category}</td>
                  <td className={css.price}>
                    <span className={css.overlayDesc}>
                      <span>{item.amount}</span>
                      <span>
                        <button
                          value={item.forDeleteId}
                          id={item.id}
                          onClick={e => {
                            changeModal(e);
                            handleChangeModal();
                          }}
                          className={css.btn}
                          type="button"
                        ></button>
                      </span>
                    </span>
                  </td>
                </tr>
              ))}
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
};

export default DashboardTable;
