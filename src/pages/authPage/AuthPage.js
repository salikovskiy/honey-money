import React, { Component } from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import logo from '../../assets/img/logo/svg/logo_146x34.svg';

import './AuthPage.css';

class AuthPage extends Component {
  state = {};
  render() {
    return (
      <>
        <header className="header">
          <a href="/">
            <img src={logo} alt="honey-money-logo" className="image" />
          </a>
        </header>
        <main className="main">
          <div className="container">
            <h2 className="h2">
              <span className="letter">M</span>oney
            </h2>
            <h2 className="desktop-h2">
              Finance <span className="desktop-span">app</span>
            </h2>

            <AuthForm />
            <p className="p">
              Контролируй свой бюджет <span className="table-text">с нами</span>
            </p>
          </div>
        </main>
      </>
    );
  }
}

export default AuthPage;
