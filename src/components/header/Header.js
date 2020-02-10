import React, { Component } from 'react';
import svg from '../../assets/img/logo/svg/logo_146x34.svg';
import style from './header.module.css';
import Modal from "../modal/Modal"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {logOut} from '../../redux/actions'

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

export default connect(null, mapDispatchToProps) (Header);