import React, { Component } from 'react';
import Calendar from 'react-calendar';
// import Select from 'react-select';
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

  backDropCalendar = event => {
    const dataset = event.target.dataset;
    if (dataset && dataset.modal === 'true') {
      this.setState({ openCalendar: false });
    }
  };

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
      //   console.log('objPostCost->', objPostCost);
      //   console.log('this.props', this.props);.
      console.log('Расход--->', objPostCost);
      //   this.props.postCosts(objPostCost);
    } else {
      alert('Недостаточно средств!');
    }
    if (window.innerWidth < 768) {
      this.props.closeModal();
    }
    this.onResetForm();
  };

  onResetForm = () => {
    this.setState({ descriptionCost: '', amountCost: '', options: [] });
  };

  onChangeInput = e => {
    // let result = '';
    if (e.target.value <= 99999999.99) {
      this.setState({
        amountCost: e.target.value,
      });
    }
  };

  createOptions = async () => {
    const responce = await services.getAllProducts(this.props.token);
    // console.log('responce', responce.data.products);
    const productArray = await responce.data.products;
    // console.log('productArray', productArray);
    // console.log('this.props.products in createOptions', this.props.products);
    // const productOptions = this.props.products.map(product => {
    const productOptions = await productArray.map(product => {
      //   console.log('product', product.category.name);
      // let productName = product.name;
      // let categoryName = product.category.name;
      return {
        value: `${product.name}  --- ${product.category.name}`,
        label: `${product.name}  --- ${product.category.name}`,
        id: product._id,
      };
    });
    // console.log('productOptions', productOptions);
    this.setState({ options: productOptions });
    // return productOptions;
  };

  handleChangeSelect = (newValue, actionMeta) => {
    if (actionMeta.action === 'create-option') {
      this.createNewProduct(newValue.value);
    }

    console.dir(newValue);
    // console.group('Value Changed');
    const productId = newValue.id ? newValue.id : '';
    console.log('newValue.id', newValue.id);
    // const productId = newValue.id;
    this.setState({ descriptionCost: newValue, id: productId });
    // console.log(newValue);
    // console.log(`action: ${actionMeta.action}`);
    // console.groupEnd();
  };

  handleInputChangeSelect = (inputValue, actionMeta) => {
    // if (inputValue.length > 2) {
    //   //   console.log('открываем селект');
    //   this.createOptions();
    // } else {
    //   this.setState({ options: [] });
    // }
    //   console.group('Input Changed');
    //   console.log(`action: ${actionMeta.action}`);
    //   console.groupEnd();
  };

  createNewProduct = value => {
    console.log(`Нужно создать статью расходов ${value}`);
  };

  render() {
    const {
      openCalendar,
      formatDate,
      descriptionCost,
      amountCost,
      options,
    } = this.state;
    const { dateRegistration, closeModal } = this.props;

    return (
      //   <div className={css.overlay}>
      <div className={css.container}>
        <h3 className={css.title}>Ввести расход</h3>
        <span className={css.close} onClick={closeModal}></span>
        <button onClick={this.onOpenCalendar} className={css.cal}>
          <img src={calendar} alt="cal" />
        </button>
        {openCalendar && (
          // <div
          //   data-modal={'true'}
          //   className={css.calendarOverlay}
          //   onClick={this.backDropCalendar}
          // >
          <Calendar
            className={css.calendar}
            onChange={this.onChangeDate}
            maxDate={new Date()}
            minDate={new Date(dateRegistration)}
          />
          // </div>
        )}
        <span className={css.formatDate}>{formatDate}</span>
        <form className={css.form} onSubmit={this.onAddCost}>
          <div className={css.formOverlay}>
            <CreatableSelect
              onClick={this.createOptions()}
              className={css.inputDescription}
              isClearable
              //   onCreateOption={()}
              onChange={this.handleChangeSelect}
              onInputChange={this.handleInputChangeSelect}
              placeholder="Ввести расходы..."
              noOptionsMessage={() => 'Уточните поиск...'}
              formatCreateLabel={inputValue =>
                `Создать новый типа расхода: ${inputValue}`
              }
              options={options}
              //   options={options}
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
      //   </div>
    );
  }
}

export default AddCost;
