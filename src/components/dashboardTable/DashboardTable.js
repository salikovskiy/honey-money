import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  render() {
    if (window.innerWidth < 768) {
      console.log("min 768");
      // modalWindow.innerHTML = modalMobile(data.goal);
      return (
        <div id="table-wrapper">
          <div id="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Расходы</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="row">
                    <span className="cover">
                      <p className="discription">Метро</p>
                      <span className="date">30.01.2020</span>
                    </span>
                    <span className="categore">Транспорт</span>
                    <p className="price">
                      -30.00 грн.
                      <button className="btn" type="button"></button>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="row">
                    <span className="cover">
                      <p className="discription">Метро</p>
                      <span className="date">30.01.2020</span>
                    </span>
                    <span className="categore">Транспорт</span>
                    <p className="price">
                      -30.00 грн.
                      <button className="btn" type="button"></button>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="row">
                    <span className="cover">
                      <p className="discription"></p>
                      <span className="date"></span>
                    </span>
                    <span className="categore"></span>
                    <p className="price"></p>
                  </td>
                </tr>
                <tr>
                  <td className="row">
                    <span className="cover">
                      <p className="discription"></p>
                      <span className="date"></span>
                    </span>
                    <span className="categore"></span>
                    <p className="price"></p>
                  </td>
                </tr>
                <tr>
                  <td className="row">
                    <span className="cover">
                      <p className="discription"></p>
                      <span className="date"></span>
                    </span>
                    <span className="categore"></span>
                    <p className="price"></p>
                  </td>
                </tr>
                <tr>
                  <td className="row">
                    <span className="cover">
                      <p className="discription"></p>
                      <span className="date"></span>
                    </span>
                    <span className="categore"></span>
                    <p className="price"></p>
                  </td>
                </tr>
                <tr>
                  <td className="row">
                    <span className="cover">
                      <p className="discription"></p>
                      <span className="date"></span>
                    </span>
                    <span className="categore"></span>
                    <p className="price"></p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1280) {
      // modalWindow.innerHTML = modal(data.goal);
      console.log("max 768");
      return (
        <div id="table-wrapper">
          <div id="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Дата</th>
                  <th>Описание</th>
                  <th>Категория</th>
                  <th>Сумма</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>30.01.2020</td>
                  <td>Метро</td>
                  <td>Транспорт</td>
                  <td className="price">
                    <span>
                      -30.00 грн.
                      <button className="btn" type="button"></button>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>30.01.2020</td>
                  <td>Ланч</td>
                  <td>Питание</td>
                  <td className="price">
                    <span>
                      -30.00 грн.
                      <button className="btn" type="button"></button>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      console.log("more");
      return (
        <div id="table-wrapper">
          <div id="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Дата</th>
                  <th>Описание</th>
                  <th>Категория</th>
                  <th>Сумма</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>30.01.2020</td>
                  <td>Метро</td>
                  <td>Транспорт</td>
                  <td className="price">
                    <span>
                      -30.00 грн.
                      <button className="btn" type="button"></button>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>30.01.2020</td>
                  <td>Ланч</td>
                  <td>Питание</td>
                  <td className="price">
                    <span>
                      -30.00 грн.
                      <button className="btn" type="button"></button>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}
