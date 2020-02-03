import React from 'react';
import Loader from 'react-loader-spinner';
import css from './LoaderThreeDots.module.css';

const LoaderThreeDots = () => (
  <div className={css.LoaderConteiner}>
    <div>
      <Loader
        type="ThreeDots"
        color="#ff6c00"
        height={100}
        width={100}
        timeout={3000}
        backgroundColor="#00000026"
        className={css.overlayLoader}
      />
    </div>
  </div>
);

export default LoaderThreeDots;
