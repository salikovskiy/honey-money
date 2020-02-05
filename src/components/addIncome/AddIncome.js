import React, { Component } from 'react';
import css from './css/addIncome.module.css';
import Calendar from 'react-calendar';
//import Moment from 'react-moment';
var moment = require('moment');

class AddIncome extends Component {
  state = {
    value: '',
    date: new Date(),
    calendar: false,
  };

  componentDidMount() {}

  handleChangeIncome = e => {
    if (e.target.value <= 99999999.99) {
      this.setState({ value: e.target.value });
    }
  };

  onChange = date => this.setState({ date, datenow: date });

  calendarOpen = e => {
    this.setState(prevState => ({ calendar: !prevState.calendar }));
  };

  handleClearForm = e => {
    /* e.preventDefault(); */
    this.setState({ value: '' });
  };

  handleSubmit = e => {
    e.preventDefault();
    let value = parseFloat(Number(this.state.value).toFixed(2));
    if (value > 0) {
      this.props.addIncome({
        amount: value,
        date: moment(this.state.date).format('MM.DD.YYYY'),
      });
      this.handleClearForm();
      this.props.closeModal();
      // alert(`Вы внесли ${value} на баланс!`);
    } else {
      alert('Внесите положительный баланс!');
    }
  };
  pickDate = async () => {
    await this.onChange();
    this.calendarOpen();
  };
  /* backDropClick = e => {
    console.log(e.target.className);
    if (e.target.classList.contains('overlay')) {
      alert('close!');
    }
  }; */

  render() {
    return (
      <>
        <div className={css.overlay} onClick={this.backDropClick}>
          <div className={css.modalIncome}>
            <span onClick={this.props.closeModal} className={css.close}></span>

            <form className={css.form} onSubmit={this.handleSubmit}>
              <h2 className={css.addIncomeTittle}>Ввести доход</h2>
              <div className={css.calendarDesk}>
                <div
                  onClick={this.calendarOpen}
                  className={css.calendarIconWrapper}
                >
                  <i className={css.calendarIcon}></i>
                </div>
                {this.state.calendar && (
                  <Calendar
                    className={css.calendar}
                    onChange={this.onChange}
                    value={this.state.date}
                    maxDate={new Date()}
                    minDate={this.props.regDate}
                    onClickDay={this.pickDate}
                  />
                )}

                <span className={css.dateLine}>
                  {moment(this.state.date).format('MM.DD.YYYY')}
                </span>

                <input
                  className={css.inptAddIncome}
                  placeholder="введите сумму"
                  value={this.state.value}
                  onChange={this.handleChangeIncome}
                  type="text"
                />
              </div>
              <div className={css.btnWrapper}>
                <button
                  type="submit"
                  className={`${css.btnAddIncome} ${css.btn}`}
                >
                  Ввод
                </button>
                <button
                  type="reset"
                  onClick={this.handleClearForm}
                  className={`${css.btnReset} ${css.btn}`}
                >
                  Очистить
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default AddIncome;
