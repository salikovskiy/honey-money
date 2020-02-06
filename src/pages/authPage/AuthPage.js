import React, { Component } from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import logo from '../../assets/img/logo/svg/logo_146x34.svg';

import css from './AuthPage.module.css';

class AuthPage extends Component {
  state = {};
  render() {
    return (
      <>
        <header className={css.header}>
          <a href="/">
            <img src={logo} alt="honey-money-logo" className={css.image} />
          </a>
        </header>
        <main className={css.main}>
          <div className={css.container}>
            <h2 className={css.h2}>
              <span className={css.letter}>M</span>oney
            </h2>
            <h2 className={css.desktoph2}>
              Finance <span className={css.desktopSpan}>app</span>
            </h2>

            <AuthForm />
            <p className={css.p}>
              Контролируй свой бюджет{' '}
              <span className={css.tableText}>с нами</span>
            </p>
          </div>
        </main>
      </>
    );
  }
}

export default AuthPage;
