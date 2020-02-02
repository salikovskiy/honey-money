import React, { Component } from 'react';
import css from './css/addIncome.module.css';
import Calendar from 'react-calendar';

class AddIncome extends Component {
  state = { value: '', date: '', calendar: false, isModalOpen: false };
  handleChangeIncome = e => {
    this.setState({ value: e.target.value });
  };
  onChange = date => this.setState({ date });

  onChangeModalIncome = e => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  /* calendarOpen = e => {
    this.setState({ calendar: true });
  }; */

  render() {
    return (
      <>
        <div className={css.overlay}>
          <div className={css.modalIncome}>
            <span onClick={this.props.closeModal} className={css.close}></span>

            <h2 className={css.addIncomeTittle}>Ввести доход</h2>
            <div className={css.calendarDesk}>
              <div
                onClick={this.calendarOpen}
                className={css.calendarIconWrapper}
              >
                <i className={css.calendarIcon}></i>
              </div>
              {this.state.calendar && (
                <Calendar onChange={this.onChange} value={this.state.date} />
              )}

              <span className={css.dateLine}>{this.state.date}25.01.2020</span>
              <input
                className={css.inptAddIncome}
                placeholder="введите сумму"
                value={this.state.value}
                onChange={this.handleChangeIncome}
              />
            </div>
            <div className={css.btnWrapper}>
              <button
                type="submit"
                className={`${css.btnAddIncome} ${css.btn}`}
              >
                Ввод
              </button>
              <button className={`${css.btnReset} ${css.btn}`}>Очистить</button>
            </div>
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
