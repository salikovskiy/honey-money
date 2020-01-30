import React, { Component } from 'react';
import './AuthForm.css';

class AuthForm extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper">
        <form>
          <label htmlFor="email" className="label">
            Электронная почта
          </label>
          <input
            type="email"
            id="email"
            className="input"
            placeholder="Your@email.com"
          />
          <label htmlFor="password" className="label">
            Пароль
          </label>
          <input type="password" className="input" placeholder="Пароль" />
          <button className="button-orange">Войти</button>
          <button className="button">Регистрация</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
