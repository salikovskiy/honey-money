<<<<<<< HEAD
import React, { Component } from 'react';
import svg from '../../assets/img/logo/svg/logo_146x34.svg';
import style from './header.module.css';
import Modal from "../modal/Modal"
import { Link } from 'react-router-dom';
=======
import React from 'react';
>>>>>>> dev
import { connect } from 'react-redux';
import { logOut } from '../../redux/actions';
import { Link } from 'react-router-dom';
import style from './header.module.css';
import svg from '../../assets/img/logo/svg/logo_146x34.svg';

<<<<<<< HEAD
class Header extends Component {
  state = { 
    isOpenModal:false,
  };

  onChengeModal = () => {
    this.setState(state => ({isOpenModal: !state.isOpenModal}));
  };

  render () {
    return (
        <div className={style.header}>
    <Link to="/dashboard">
      <img className={style.header_logo} src={svg} alt="logo" />
    </Link>
    <div className={style.header_user}>
      {/* <p className={style.header_user_name}>User Name</p> */}
      <button onClick={this.onChengeModal} type="button" className={style.header_user_logout}>Выйти</button>
    </div>

     {this.state.isOpenModal && (
       <Modal  isOpen={this.state.isOpenModal} isClose={this.onChengeModal}/>
     )}

  </div>
    )
  }
}


// const Header = (props) => {

//     return (
//   <div className={style.header}>
//     <Link to="/dashboard">
//       <img className={style.header_logo} src={svg} alt="logo" />
//     </Link>
//     <div className={style.header_user}>
//       {/* <p className={style.header_user_name}>User Name</p> */}
//       <button type="button" className={style.header_user_logout}>Выйти</button>
//     </div>
//   </div>
  
// )};
const mapDispatchToProps =  {
    logOut,
  };
=======
const Header = props => {
  return (
    <div className={style.header}>
      <Link to="/dashboard">
        <img className={style.header_logo} src={svg} alt="logo" />
      </Link>
      <div className={style.header_user}>
        {/* <p className={style.header_user_name}>User Name</p> */}
        <button
          onClick={() => props.logOut()}
          type="button"
          className={style.header_user_logout}
        >
          Выйти
        </button>
      </div>
    </div>
    //   <div className={style.modal}>
    //     <p className={style.modal_text}>Вы действительно хотите выйти?</p>
    //     <div className={style.modal_button}>
    //     <button type="button" className={style.modal_button_yes}>Да</button>
    //     <button type="button" className={style.modal_button_no}>Нет</button>
    //     </div>
    //   </div>
  );
};
const mapDispatchToProps = {
  logOut,
};
>>>>>>> dev

export default connect(null, mapDispatchToProps)(Header);
