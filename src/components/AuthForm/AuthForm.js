import React, { Component } from 'react';

class AuthForm extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper">
        <form>
          <label htmlFor="email">Электронная почта</label>
          <input type="email" id="email" />
          <label htmlFor="password">Пароль</label>
          <input type="password" />
        </form>
      </div>
    );
  }
}

export default AuthForm;
