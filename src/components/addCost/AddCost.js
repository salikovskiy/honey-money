import React, { Component } from 'react';
import Calendar from 'react-calendar';
import CreatableSelect from 'react-select/creatable';
import PNotify from 'pnotify/dist/es/PNotify';
import onFormatDate from '../../utilities/formatDate';
import css from './addCost.module.css';
import calendar from '../../assets/img/svg/calendar.svg';
import services from '../../services/services';
import AddProductModal from './addProductModal/AddProductModal';
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
    isOpenModalAddProduct: false,
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

  onAddCost = async e => {
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
      if (this.state.descriptionCost) {
        await this.props.postCosts(objPostCost);
      } else {
        PNotify.notice('Выберите тип расходов!');
      }
    } else {
      PNotify.notice('Недостаточно средств!');
    }
    if (window.innerWidth < 768) {
      this.props.closeModal();
    }
    await this.props.getTransactions();
    await this.onResetForm();
  };
  onResetForm = () => {
    this.setState({
      descriptionCost: '',
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
    const productId = newValue.id ? newValue.id : '';
    this.setState({
      descriptionCost: newValue,
      id: productId,
    });
  };
  handleInputChangeSelect = (inputValue, actionMeta) => {
    if (inputValue.length > 0) {
      this.state.options.length === 0 && this.createOptions();
    } else {
      this.setState({ options: [] });
    }
  };
  isOpenModalAddProductFunction = () => {
    this.setState(state => ({
      isOpenModalAddProduct: !this.state.isOpenModalAddProduct,
    }));
  };
  createNewProduct = value => {
    this.isOpenModalAddProductFunction();
  };

  cangeProductId = id => {
    this.setState({ id });
  };

  backDropCalendar = event => {
    const dataset = event.target.dataset;
    if (dataset && dataset.modalcal === 'true') {
      this.setState({ openCalendar: false });
    }
  };
  render() {
    const {
      openCalendar,
      formatDate,
      amountCost,
      options,
      descriptionCost,
      isOpenModalAddProduct,
    } = this.state;
    const { dateRegistration, closeModal, token } = this.props;
    window.addEventListener('keyup', this.handleKeyPressCalendar);
    return (
      <>
        {isOpenModalAddProduct && (
          <AddProductModal
            token={token}
            descriptionCost={descriptionCost}
            isOpenModal={this.isOpenModalAddProductFunction}
            cangeProductId={this.cangeProductId}
          />
        )}
        <div className={css.container}>
          <h3 className={css.title}>Ввести расход</h3>
          <span className={css.close} onClick={closeModal}></span>
          <button onClick={this.onOpenCalendar} className={css.cal}>
            <img src={calendar} alt="cal" />
          </button>
          {openCalendar && (
            <>
              <div
                data-modalcal={'true'}
                className={css.calendarOverlay}
                onClick={this.backDropCalendar}
              ></div>
              <Calendar
                className={css.calendar}
                onChange={this.onChangeDate}
                maxDate={new Date()}
                minDate={new Date(dateRegistration)}
              />
            </>
          )}
          <span className={css.formatDate}>{formatDate}</span>
          <form className={css.form} onSubmit={this.onAddCost}>
            <div className={css.formOverlay}>
              <CreatableSelect
                className={css.inputDescription}
                // isClearable
                onChange={this.handleChangeSelect}
                onInputChange={this.handleInputChangeSelect}
                placeholder="Ввести расходы..."
                noOptionsMessage={() => 'Уточните поиск...'}
                formatCreateLabel={inputValue =>
                  `Создать новый тип расхода: ${inputValue}`
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
      </>
    );
  }
}
export default AddCost;
