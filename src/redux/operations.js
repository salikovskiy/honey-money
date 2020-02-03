import {
  getTransactionsStart,
  getBalanceSuccess,
  getCostsSuccess,
//   postIncomeSuccess,
} from './actions';
import services from '../services/services';

export const getTransactions = () => async (dispatch, getState) => {
  dispatch(getTransactionsStart());
  console.log(getState());
  try {
    const response = await services.getAllTransactions(getState().token);
    dispatch(getBalanceSuccess(response.balance));
    dispatch(getCostsSuccess(response.costs));
  } catch (error) {
    console.log(error);
  }
};

export const postIncome = obj => async (dispatch, getState) => {
  try {
    const response = await services.postIncome(getState().token, obj);
    dispatch(getBalanceSuccess(response.balance));
  } catch (error) {
    console.log(error);
  }
};
