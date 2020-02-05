import React, { Component } from 'react';
import Calendar from 'react-calendar';
// import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import onFormatDate from '../../utilities/formatDate';
import css from './addCost.module.css';
import calendar from '../../assets/img/svg/calendar.svg';
var moment = require('moment');

const options = [
  { value: 'ocean', label: 'Ocean' },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green' },
  { value: 'forest', label: 'Forest' },
  { value: 'slate', label: 'Slate' },
  { value: 'silver', label: 'Silver' },
];

class AddCost extends Component {
  state = {
    date: new Date(),
    formatDate: '',
    openCalendar: false,
    descriptionCost: '',
    amountCost: '',
    dateForBackend: moment(new Date()).format('YYYY-MM-DD'),
    dateForBackendFull: moment(new Date()).format(),
  };

  componentDidMount() {
    const curentDate = new Date();
    const newFormatDate = onFormatDate(curentDate);
    this.setState({ formatDate: newFormatDate });
  }

  onChangeDate = date => {
    const dateForBackend = moment(date).format('YYYY-MM-DD');
    const dateForBackendFull = moment(date).format();
    this.setState({ date: date, openCalendar: false });
    const newFormatDate = onFormatDate(date);
    this.setState({
      formatDate: newFormatDate,
      dateForBackend,
      dateForBackendFull,
    });
  };

  onOpenCalendar = () => {
    this.setState({ openCalendar: true });
  };

  onAddCost = e => {
    e.preventDefault();
    if (this.props.balance >= this.state.amountCost) {
      this.props.getCost({
        date: this.state.dateForBackend,
        product: {
          productId: this.state.id,
          amount: this.state.amountCost,
          date: this.state.dateForBackendFull,
        },
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
    this.setState({
      [e.target.name]: result,
    });
  };

  createOptions = () => {
    const productOptions = this.props.products.map(product => ({
      value: product.name,
      label: product.name,
      id: product._id,
    }));
    console.log('productOptions', productOptions);
    return productOptions;
  };

  handleChangeSelect = (newValue, actionMeta) => {
    // console.group('Value Changed');
    const productId = newValue.id ? newValue.id : '';
    this.setState({ descriptionCost: newValue, id: productId });
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    // console.groupEnd();
  };
  handleInputChangeSelect = (inputValue, actionMeta) => {
    // console.group('Input Changed');
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    // console.groupEnd();
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
            className={css.calendar}
            onChange={this.onChangeDate}
            maxDate={new Date()}
            minDate={dateRegistration}
          />
        )}
        <span className={css.formatDate}>{formatDate}</span>
        <form className={css.form} onSubmit={this.onAddCost}>
          <div className={css.formOverlay}>
            <CreatableSelect
              className={css.inputDescription}
              isClearable
              onChange={this.handleChangeSelect}
              onInputChange={this.handleInputChangeSelect}
              options={this.createOptions()}
            />
            {/* <input
              className={css.inputDescription}
              required
              tipe="text"
              placeholder="Ввести расходы..."
              name="descriptionCost"
              onChange={this.onChangeInput}
              value={descriptionCost}
            ></input> */}
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
