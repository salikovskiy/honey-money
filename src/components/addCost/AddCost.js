import React, { Component } from 'react';
import Calendar from 'react-calendar';
import CreatableSelect from 'react-select/creatable';
import onFormatDate from '../../utilities/formatDate';
import css from './addCost.module.css';
import calendar from '../../assets/img/svg/calendar.svg';
import services from '../../services/services';
var moment = require('moment');

class AddCost extends Component {
  state = {
    date: new Date(),
    formatDate: '',
    openCalendar: false,
    descriptionCost: '',
    amountCost: '',
    dateForBackend: moment(new Date()).format('YYYY-MM-DD'),
    dateForBackendFull: moment(new Date()).format(),
    options: [],
    valueSelect: {},
    id: 1,
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

  handleKeyPressCalendar = async event => {
    if (event.code === 'Escape') {
      this.setState({ openCalendar: false });
    }
  };

  //   backDropCalendar = event => {
  //     const dataset = event.target.dataset;
  //     if (dataset && dataset.modal === 'true') {
  //       this.setState({ openCalendar: false });
  //     }
  //   };

  onAddCost = e => {
    e.preventDefault();
    if (this.props.balance >= this.state.amountCost) {
      const objPostCost = {
        date: this.state.dateForBackend,
        product: {
          productId: this.state.id,
          amount: parseFloat(Number(this.state.amountCost).toFixed(2)),

          date: this.state.dateForBackendFull,
        },
      };
      console.log('objPostCost', objPostCost);
      this.props.postCosts(objPostCost);
    } else {
      alert('Недостаточно средств!');
    }
    if (window.innerWidth < 768) {
      this.props.closeModal();
    }
    this.onResetForm();
  };

  onResetForm = () => {
    this.setState({
      descriptionCost: {},
      amountCost: '',
      options: [],
      date: new Date(),
      formatDate: onFormatDate(new Date()),
    });
  };

  onChangeInput = e => {
    if (e.target.value <= 99999999.99) {
      this.setState({
        amountCost: e.target.value,
      });
    }
  };

  createOptions = async () => {
    const responce = await services.getAllProducts(this.props.token);
    const productArray = await responce.data.products;
    const productOptions = await productArray.map(product => {
      return {
        value: `${product.name}  --- ${product.category.name}`,
        label: `${product.name}  --- ${product.category.name}`,
        id: product._id,
      };
    });
    this.setState({ options: productOptions });
  };

  handleChangeSelect = (newValue, actionMeta) => {
    if (actionMeta.action === 'create-option') {
      this.createNewProduct(newValue.value);
    }

    // console.dir(newValue);
    const productId = newValue.id ? newValue.id : '';
    // const productId = newValue.id;
    console.log('newValue.id', newValue.id);
    console.log('newValue', newValue);
    this.setState({
      descriptionCost: newValue,
      id: productId,
      //   valueSelect: newValue,
    });
  };

  handleInputChangeSelect = (inputValue, actionMeta) => {
    if (inputValue.length > 0) {
      this.createOptions();
    } else {
      this.setState({ options: [] });
    }
    //   console.log(`action: ${actionMeta.action}`);
  };

  createNewProduct = value => {
    console.log(`Нужно создать статью расходов ${value}`);
  };

  render() {
    const {
      openCalendar,
      formatDate,
      amountCost,
      options,
      valueSelect,
      descriptionCost,
    } = this.state;
    const { dateRegistration, closeModal } = this.props;
    window.addEventListener('keyup', this.handleKeyPressCalendar);

    return (
      <div className={css.container}>
        <h3 className={css.title}>Ввести расход</h3>
        <span className={css.close} onClick={closeModal}></span>
        <button onClick={this.onOpenCalendar} className={css.cal}>
          <img src={calendar} alt="cal" />
        </button>
        {openCalendar && (
          <Calendar
            className={css.calendar}
            onChange={this.onChangeDate}
            maxDate={new Date()}
            minDate={new Date(dateRegistration)}
          />
        )}
        <span className={css.formatDate}>{formatDate}</span>
        <form className={css.form} onSubmit={this.onAddCost}>
          <div className={css.formOverlay}>
            <CreatableSelect
              //   onClick={this.createOptions()}
              className={css.inputDescription}
              isClearable
              onChange={this.handleChangeSelect}
              onInputChange={this.handleInputChangeSelect}
              placeholder="Ввести расходы..."
              noOptionsMessage={() => 'Уточните поиск...'}
              formatCreateLabel={inputValue =>
                `Создать новый типа расхода: ${inputValue}`
              }
              options={options}
              value={descriptionCost}
            />
            <input
              className={css.inputAmount}
              required
              type="text"
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
