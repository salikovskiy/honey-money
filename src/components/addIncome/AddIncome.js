import React, { Component } from 'react';
import css from './css/addIncome.module.css';
import Calendar from 'react-calendar';

const getDateNow = () => {
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const dateNow = `${day}.${month + 1}.${year}`;
  return dateNow;
};

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
    this.props.income({
      amount: value,
      date: this.state.date,
    });
    this.handleClearForm();
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

                <span className={css.dateLine}>{getDateNow()}</span>

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

// const AddIncome = ({ closeModal, value, handleChange }) => (
//   <>
//     <div className={css.overlay}>
//       <div className={css.modalIncome}>
//         <span onClick={closeModal} className={css.close}></span>
//         <h2 className={css.addIncomeTittle}>Ввести доход</h2>
//         <div className={css.calendarDesk}>
//           <div className={css.calendarIconWrapper}>
//             <i className={css.calendarIcon}></i>
//           </div>
//           <span className={css.dateLine}>25.01.2020</span>
//           <input
//             className={css.inptAddIncome}
//             placeholder="введите сумму"
//             value={value}
//             onChange={handleChange}
//           />
//         </div>
//         <div className={css.btnWrapper}>
//           <button className={`${css.btnAddIncome} ${css.btn}`}>Ввод</button>
//           <button className={`${css.btnReset} ${css.btn}`}>Очистить</button>
//         </div>
//       </div>
//     </div>
//   </>
// );

// export default AddIncome;
