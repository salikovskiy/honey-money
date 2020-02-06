import React, { Component } from 'react';
import css from './AuthForm.module.css';
import { connect } from 'react-redux';
import { signUp } from '../../redux/actions';
import { logIn } from '../../redux/actions';
import { validate } from 'indicative/validator';

class AuthForm extends Component {
  state = {
    email: '',
    password: '',
    name: {
      fullName: 'New User',
      firstName: 'New',
      lastName: 'User',
    },
    error: '',
  };

  rules = {
    email: 'required|email',
    password: 'required|min:6',
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleLogIn = e => {
    e.preventDefault();
    validate(
      {
        email: this.state.email,
        password: this.state.password,
      },
      this.rules,
    )
      .then(
        () =>
          this.props.logIn({
            email: this.state.email,
            password: this.state.password,
          }),
        this.setState({ error: '' }),
      )
      .catch(err => {
        const error = err[0].message;
        this.setState({ error });
      });
  };

  handleSignUp = e => {
    e.preventDefault();
    validate(this.state, this.rules)
      .then(() => {
        this.props.signUp(this.state);
        this.setState({ error: '' });
      })
      .catch(err => {
        const error = err[0].message;
        this.setState({ error });
      });
  };

  render() {
    return (
      <div className={css.wrapper}>
        <div className={css.container}>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="email" className={css.label}>
              Электронная почта
            </label>
            <input
              required
              onChange={this.handleChange}
              type="email"
              id="email"
              className={css.input}
              placeholder="Your@email.com"
            />
            <label htmlFor="password" className={css.label}>
              Пароль
            </label>
            <input
              required
              pattern="^[a-zA-Z0-9]{6,}$"
              id="password"
              type="password"
              className={css.input}
              placeholder="Пароль"
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className={css.buttonOrange}
              onClick={this.handleLogIn}
            >
              Войти
            </button>

            <button
              type="submit"
              className={css.button}
              onClick={this.handleSignUp}
            >
              Регистрация
            </button>
          </form>
          {this.state.error ? (
            <p className={css.error}>{this.state.error}</p>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    authError: state.finance.authReducer.authError,
    // token: state
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signUp: newUser => dispatch(signUp(newUser)),
    logIn: user => dispatch(logIn(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
