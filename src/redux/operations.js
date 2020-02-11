import {
  fetchStart,
  getBalanceSuccess,
  getCostsSuccess,
  fetchError,
  costsPostSuccess,
  getIncomesSuccess,
  costsDeleteSuccess,
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
    dispatch(getIncomesSuccess(response.data.income));
  } catch (error) {
    dispatch(fetchError(error.message));
    console.log(error);
    // throw new Error(error);
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
    console.log(response.data.createdCosts)
    await dispatch(costsPostSuccess(response.data.createdCosts));
    await dispatch(getBalanceSuccess(response.data.balance));
  } catch (error) {
    dispatch(fetchError(error.message));
    console.log(error);
    throw new Error(error);
  }
};

export const deleteCosts = (forDeleteId, costId) => async (
  dispatch,
  getState,
) => {
  console.log(forDeleteId, costId);
  dispatch(fetchStart());
  try {
    const response = await services.deleteCost(
      getState().finance.authReducer.token,
      forDeleteId,
      costId,
    );
    await dispatch(costsDeleteSuccess(forDeleteId));
    await dispatch(getBalanceSuccess(response.data.balance));
  } catch (error) {
    dispatch(fetchError(error.message));
    console.log(error);
    throw new Error(error);
  }
};
