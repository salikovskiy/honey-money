import React, { Component } from 'react';
import css from './AuthForm.module.css';

class AuthForm extends Component {
  state = {};
  render() {
    return (
      <div className={css.wrapper}>
        <div className={css.container}>
          <form>
            <label htmlFor="email" className={css.label}>
              Электронная почта
            </label>
            <input
              type="email"
              id="email"
              className={css.input}
              placeholder="Your@email.com"
            />
            <label htmlFor="password" className={css.label}>
              Пароль
            </label>
            <input type="password" className={css.input} placeholder="Пароль" />
            <button className={css.buttonOrange}>Войти</button>
            <button className={css.button}>Регистрация</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AuthForm;
