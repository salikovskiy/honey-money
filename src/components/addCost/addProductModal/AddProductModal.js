import React, { Component } from 'react';
import ModalBackDrop from '../../modalBackDrop/ModalBackDrop';
import css from '../../addIncome/css/addIncome.module.css';
import Select from 'react-select';
import services from '../../../services/services';
import style from './addProductModal.module.css'

class AddProductModal extends Component {
  state = { work: true, options: [], value: null };

  componentDidMount = async () => {
    const response = await services.getAllCategories(this.props.token);
    console.log('response', response.data.categories);
    const arr = response.data.categories.map(el => ({
      value: el._id,
      label: el.name,
    }));
    this.setState({ options: arr });
  };

  componentWillUnmount = () => {
    this.state.work && this.props.isOpenModal();
  };
  handleChangeSelect = (e, a) => {
    console.log(a);
    this.setState({ value: e });
  };
  onHandleClickExit = async () => {
    await this.setState({ work: false });
    this.props.isOpenModal();
  };

  handleCreateProduct = async () => {
    const obj = {
      name: this.props.descriptionCost.value,
      category: this.state.value.value,
    };
    const response = await services.addProduct(this.props.token, obj);
    await this.props.cangeProductId(response.data.product._id);
    this.onHandleClickExit();
  };

  onHandleClickCancellation = () => {
    this.onHandleClickExit();
  };

  render() {
    const { descriptionCost } = this.props;
    const { options, value } = this.state;
    return (
      <>
        <div className={css.modalIncome}>
          <span onClick={this.onHandleClickExit} className={css.close}></span>
          <form className={css.form} onSubmit={this.handleSubmit}>
            <h2 className={css.addIncomeTittle}>
              К какой категории относиться "{descriptionCost.value}"
            </h2>
            <Select
            className={style.select}
              isClearable
              onChange={this.handleChangeSelect}
              placeholder="Выберете категорию..."
              options={options}
              value={value}
            />

            <div className={`${css.btnWrapper} ${style.btnContainer}`}>
              <button
                disabled= {!value ? "disabled" : null}
                type="button"
                onClick={this.handleCreateProduct}
                className={`${css.btnAddIncome} ${css.btn}`}
              >
                Создать
              </button>
              <button
                type="button"
                onClick={this.onHandleClickCancellation}
                className={`${css.btnReset} ${css.btn}`}
              >
                Отмена
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default ModalBackDrop(AddProductModal);
