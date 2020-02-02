import Type from './types';

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
