import React, { Component } from 'react';
import css from './css/addIncome.module.css';
import Calendar from 'react-calendar';
import ModalBackDrop from './../modalBackDrop/ModalBackDrop';
import PNotify from 'pnotify/dist/es/PNotify';
var moment = require('moment');

class AddIncome extends Component {
  state = {
    value: '',
    date: new Date(),
    calendar: false,
    work: true,
    notification: false,
  };

  componentDidMount() {}
  componentWillUnmount() {
    this.state.work && this.props.isOpen();
  }

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
      this.onHandleClickExit();
    } else {
      PNotify.notice('Внесите положительную сумму на баланс!');
    }
  };
  pickDate = async () => {
    await this.onChange();
    this.calendarOpen();
  };

  backDropCalendar = event => {
    const dataset = event.target.dataset;
    if (dataset && dataset.modalcal === 'true') {
      this.calendarOpen();
    }
  };
  onHandleClickExit = async () => {
    await this.setState({ work: false });
    this.props.isOpen();
  };

  render() {
    window.addEventListener('keyup', this.handleKeyPress);
    console.log(this.props);

    return (
      <>
        <div className={css.modalIncome}>
          <span onClick={this.onHandleClickExit} className={css.close}></span>
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
                <div
                  data-modalcal={'true'}
                  className={css.calendarOverlay}
                  onClick={this.backDropCalendar}
                >
                  <Calendar
                    className={css.calendar}
                    onChange={this.onChange}
                    value={this.state.date}
                    maxDate={new Date()}
                    minDate={new Date(this.props.date)}
                    onClickDay={this.pickDate}
                  />
                </div>
              )}

              <span className={css.dateLine}>
                {moment(this.state.date).format('DD.MM.YYYY')}
              </span>

              <input
                className={css.inptAddIncome}
                placeholder="00.00 грн"
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
      </>
    );
  }
}

export default ModalBackDrop(AddIncome);
