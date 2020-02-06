import Type from '../types';

export const getCategoriesSuccess = categories => ({
  type: Type.GET_CATEGORIES_SUCCESS,
  payload: { categories },
});
