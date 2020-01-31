import {
  fetchStart,
  getBalanceSuccess,
  getCostsSuccess,
  fetchError,
} from './actions';
import services from '../services/services';

let token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMzMzODQzZGEyZDQ5MmRjYTQ4NGZjMCIsImlhdCI6MTU4MDQ5Mjc3NX0.RI1SwE7SmmKuaI5lvrWq_jW-4P7wRFZ0dR5IfX3xfNY';

export const getTransactions = () => async (dispatch, getState) => {
  dispatch(fetchStart());
  try {
    const response = await services.getAllTransactions(token);
    dispatch(getBalanceSuccess(response.data.balance));
    dispatch(getCostsSuccess(response.data.costs));
  } catch (error) {
    dispatch(fetchError(error.message));
    console.log(error);
    throw new Error(error);
  }
};

export const postIncome = obj => async (dispatch, getState) => {
  dispatch(fetchStart());
  try {
    const response = await services.addIncome(token, obj);
    await dispatch(getBalanceSuccess(response.data.balance));
  } catch (error) {
    dispatch(fetchError(error.message));
    console.log(error);
    throw new Error(error);
  }
};


export const postCosts = obj => async (dispatch, getState) => {
  dispatch(fetchStart());
  try {
    const response = await services.addIncome(getState().finance.token, obj);
    // await dispatch(getBalanceSuccess(response.data.balance));
  } catch (error) {
    dispatch(fetchError(error.message));
    console.log(error);
    throw new Error(error);
  }
};
