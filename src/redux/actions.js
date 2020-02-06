import Type from './types';
import Axios from 'axios';

export const fetchStart = () => ({
  type: Type.FETCH_START,
});

export const getBalanceSuccess = value => ({
  type: Type.GET_BALANCE_SUCCESS,
  payload: { value },
});

export const getCostsSuccess = arr => ({
  type: Type.GET_COSTS_SUCCESS,
  payload: { arr },
});

export const fetchError = error => ({
  type: Type.FETCH_ERROR,
  payload: { error },
});

export const addDateNow = date => ({
  type: Type.DATE_NOW,
  payload: { date },
});

export const signUp = newUser => {
  return (dispatch, getState) => {
    console.log(newUser);
    Axios.post('https://smart-finance.goit.co.ua/api/v1/auth/register', newUser)
      .then(responce => {
        console.log(responce);
        dispatch({ type: 'SIGNUP_SUCCESS', responce });
      })
      .catch(err => {
        dispatch({ type: 'SIGNUP_ERROR', err });
      });
  };
};

export const logIn = user => {
  return (dispatch, getState) => {
    console.log(user);
    Axios.post('https://smart-finance.goit.co.ua/api/v1/auth/login', user)
      .then(responce => {
        console.log(responce);
        dispatch({ type: 'LOGIN_SUCCESS', responce });
      })
      .catch(err => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  };
};

export const costsPostSuccess = () => ({
  type: Type.COSTS_POST_SUCCESS,
});

export const getIncomesSuccess = arr => ({
  type: Type.GET_INCOMES_SUCCESS,
  payload: {arr},
});


export const logOut = () => ({
  type: Type.LOG_OUT,
})