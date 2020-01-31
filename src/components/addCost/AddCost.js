import React, { Component } from 'react';
import Calendar from 'react-calendar';
import shortId from 'shortid';
// import Select from "react-select";
import onFormatDate from '../../utilities/formatDate';
import css from './addCost.module.css';

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
    const result =
      e.target.name === 'amountCost' ? Number(e.target.value) : e.target.value;
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
          Cal
        </button>
        {openCalendar && (
          <Calendar
            onChange={this.onChangeDate}
            maxDate={new Date()}
            minDate={dateRegistration}
          />
        )}
        <p>{formatDate}</p>
        <form onSubmit={this.onAddCost}>
          <input
            required
            tipe="text"
            placeholder="Ввести расходы..."
            name="descriptionCost"
            onChange={this.onChangeInput}
            value={descriptionCost}
          ></input>
          <input
            required
            tipe="text"
            placeholder="00.00 грн"
            name="amountCost"
            onChange={this.onChangeInput}
            value={amountCost}
            pattern="[0-9]+([.][0-9]{1,2}){0,1}"
          ></input>
          <button type="submit">Подтвердить</button>
          <button type="reset" onClick={this.onResetForm}>
            Очистить
          </button>
        </form>
      </div>
    );
  }
}

export default AddCost;
