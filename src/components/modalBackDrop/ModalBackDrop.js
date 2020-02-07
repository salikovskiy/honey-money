import React, { Component } from 'react';
import styles from './ModalBackDrop.module.css';

const ModalBackDrop = WrappedComponent => {
  return class ModalBackDrop extends Component {
    state = {
      isOpen: true,
    };

    componentDidMount() {
      document.addEventListener('keydown', this.escFunction, false);
    }

    componentWillUnmount() {
      document.removeEventListener('keydown', this.escFunction, false);
    }

    escFunction = event => {
      if (event.keyCode === 27) {
        this.closeBackDrop();
      }
    };

    outsideClick = event => {
      const dataset = event.target.dataset;
      if (dataset && dataset.modal === 'true') {
        this.closeBackDrop();
      }
    };

    closeBackDrop = () => {
      this.setState({
        isOpen: false,
      });
    };

    render() {
      return this.state.isOpen ? (
        <div
          className={styles.lightbox}
          data-modal={'true'}
          onClick={this.outsideClick}
        >
          <WrappedComponent {...this.props} />
        </div>
      ) : null;
    }
  };
};

export default ModalBackDrop;
