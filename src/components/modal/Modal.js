import React from 'react';
// import { defaultProps } from 'react-select/src/Select';
import styles from './modal.module.css';
import { connect } from 'react-redux';
import {logOut} from '../../redux/actions'
import ModalBackDrop from "../modalBackDrop/ModalBackDrop"


const Modal = (props) => {
  console.log("props", props)
    return (
          <div className={styles.modal}>
    <p className={styles.modal_text}>Вы действительно хотите выйти?</p>
    <div className={styles.modal_button}>
    <button onClick={()=>props.logOut()} type="button" className={styles.modal_button_yes}>Да</button>
    <button onClick={()=>props.isClose()} type="button" className={styles.modal_button_no}>Нет</button>
    </div>
  </div>
    )
};

const mapDispatchToProps =  {
    logOut,
  };

  export default connect(null, mapDispatchToProps) (ModalBackDrop (Modal));