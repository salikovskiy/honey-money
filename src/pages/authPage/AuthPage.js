import React, { Component } from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import logo from '../../assets/img/logo/svg/logo_146x34.svg';

class AuthPage extends Component {
  state = {};
  render() {
    return (
      <>
        <header>
          <a href="/">
            <img src={logo} alt="honey-money-logo" className />
          </a>
        </header>
        <AuthForm />
      </>
    );
  }
}

export default AuthPage;
