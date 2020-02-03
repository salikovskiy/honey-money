import Type from './types';
import Axios from 'axios';

export const getTransactionsStart = () => ({
  type: Type.GET_TRANSACTIONS_START,
});

export const getBalanceSuccess = value => ({
  type: Type.GET_BALANCE_SUCCESS,
  payload: value,
});

// export const getCostsStart=()=>({
//     type: Type.GET_COSTS_START,
// })

export const getCostsSuccess = arr => ({
  type: Type.GET_COSTS_SUCCESS,
  payload: arr,
});

// export const postIncomeStart = arr => ({
//   type: Type.POST_INCOME_START,
// });
// export const postIncomeSuccess = arr => ({
//   type: Type.POST_INCOME_SUCCESS,
//   payload: arr,
// });

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
