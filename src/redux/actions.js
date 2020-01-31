import Type from './types';

export const fetchStart = () => ({
  type: Type.FETCH_START,
});

export const getBalanceSuccess = value => ({
  type: Type.GET_BALANCE_SUCCESS,
  payload: {value},
});

export const getCostsSuccess = arr => ({
  type: Type.GET_COSTS_SUCCESS,
  payload: {arr},
});

export const fetchError = error => ({
  type: Type.FETCH_ERROR,
  payload: {error},
});

export const addDateNow = date => ({
  type: Type.DATE_NOW,
  payload: {date},
});


