import React from 'react';
import css from '../modalDashboardTable/modalDashboardTable.module.css';
import ModalBackDrop from '../../modalBackDrop/ModalBackDrop';

const ModalDashboardTable = ({
  deleteCost,
  forDeleteId,
  id,
  handleChangeModal,
}) => {
  return (
    <div className={css.modalWindow}>
      <h3 className={css.title}>Вы уверены?</h3>
      <button
        onClick={() => {
          deleteCost(forDeleteId, id);
          handleChangeModal();
        }}
        className={css.btn}
        type="button"
      >
        Да
      </button>
      <button onClick={handleChangeModal} className={css.btn} type="button">
        Нет
      </button>
    </div>
  );
};

export default ModalBackDrop(ModalDashboardTable);
