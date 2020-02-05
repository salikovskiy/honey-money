import {
  fetchStart,
  getBalanceSuccess,
  getCostsSuccess,
  fetchError,
  costsPostSuccess,
} from './actions';
import services from '../services/services';

export const getTransactions = () => async (dispatch, getState) => {
  dispatch(fetchStart());
  try {
    // console.log(getState().finance.authReducer.token);
    const response = await services.getAllTransactions(
      getState().finance.authReducer.token,
    );
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
    const response = await services.addIncome(
      getState().finance.authReducer.token,
      obj,
    );
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
    const response = await services.addCosts(
      getState().finance.authReducer.token,
      obj,
    );
    await dispatch(costsPostSuccess());
    await dispatch(getBalanceSuccess(response.data.balance));
  } catch (error) {
    dispatch(fetchError(error.message));
    console.log(error);
    throw new Error(error);
  }
};


// StatisticsPage
export const getCategories = () => async (dispatch, getState) => {
  dispatch(fetchStart());
  try {
    const response = await services.getAllCategories(
      getState().finance.authReducer.token,
    );
    // dispatch(getBalanceSuccess(response.data.balance));
    // dispatch(getCostsSuccess(response.data.costs));
  } catch (error) {
    dispatch(fetchError(error.message));
    console.log(error);
    throw new Error(error);
  }
};
