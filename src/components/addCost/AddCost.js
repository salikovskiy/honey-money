import React, { Component } from 'react';
import Calendar from 'react-calendar';
import shortId from 'shortid';
// import Select from "react-select";
import onFormatDate from '../../utilities/formatDate';
import css from './addCost.module.css';
import calendar from '../../assets/img/svg/calendar.svg';

class AddCost extends Component {
  state = {
    date: new Date(),
    formatDate: '',
    openCalendar: false,
    descriptionCost: '',
    amountCost: '',
  };

  componentDidMount() {
    const curentDate = new Date();
    const newFormatDate = onFormatDate(curentDate);
    this.setState({ formatDate: newFormatDate });
  }

  onChangeDate = date => {
    this.setState({ date: date, openCalendar: false });
    const newFormatDate = onFormatDate(date);
    this.setState({ formatDate: newFormatDate });
  };

  onOpenCalendar = () => {
    this.setState({ openCalendar: true });
  };

  onAddCost = e => {
    e.preventDefault();
    if (this.props.balance >= this.state.amountCost) {
      this.props.getCost({
        date: this.state.date,
        formatDate: this.state.formatDate,
        cost: this.state.descriptionCost,
        sum: this.state.amountCost,
        id: shortId(),
      });
    } else {
      alert('Недостаточно средств!');
    }
    this.onResetForm();
  };

  onResetForm = () => {
    this.setState({ descriptionCost: '', amountCost: '' });
  };

  onChangeInput = e => {
    let result = '';
    if (e.target.name === 'amountCost') {
      if (!isNaN(e.target.value)) {
        result = Number.parseFloat(e.target.value);
      }
    } else {
      result = e.target.value;
    }
    // const result =
    //   e.target.name === 'amountCost' ? Number(e.target.value) : e.target.value;
    this.setState({
      [e.target.name]: result,
    });
  };

  render() {
    const {
      openCalendar,
      formatDate,
      descriptionCost,
      amountCost,
    } = this.state;
    const { dateRegistration } = this.props;
    return (
      <div className={css.container}>
        <h3 className={css.title}>Ввести расход</h3>
        <span className={css.close}></span>
        <button onClick={this.onOpenCalendar} className={css.cal}>
          <img src={calendar} alt="cal" />
        </button>
        {openCalendar && (
          <Calendar
            onChange={this.onChangeDate}
            maxDate={new Date()}
            minDate={dateRegistration}
          />
        )}
        <span className={css.formatDate}>{formatDate}</span>
        <form className={css.form} onSubmit={this.onAddCost}>
          <div className={css.formOverlay}>
            <input
              className={css.inputDescription}
              required
              tipe="text"
              placeholder="Ввести расходы..."
              name="descriptionCost"
              onChange={this.onChangeInput}
              value={descriptionCost}
            ></input>
            <input
              className={css.inputAmount}
              required
              tipe="text"
              placeholder="00.00 грн"
              name="amountCost"
              onChange={this.onChangeInput}
              value={amountCost}
              pattern="[0-9]+([.][0-9]{1,2}){0,1}"
            ></input>
          </div>
          <div className={css.overlayBtn}>
            <button className={`${css.btn} ${css.btnSubmit}`} type="submit">
              Подтвердить
            </button>
            <button
              className={`${css.btn} ${css.btnReset}`}
              type="reset"
              onClick={this.onResetForm}
            >
              Очистить
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddCost;
