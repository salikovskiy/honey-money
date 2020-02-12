import { fetchStart, fetchError } from '../actions';
import services from '../../services/services';
import { getCategoriesSuccess } from './statisticsActions';

export const getCategories = () => async (dispatch, getState) => {
  dispatch(fetchStart());
  try {
    const response = await services.getAllCategories(
      getState().finance.authReducer.token,
    );
    dispatch(getCategoriesSuccess(response.data.categories));
    return response.data.categories;
  } catch (error) {
    dispatch(fetchError(error.message));
    throw new Error(error);
  }
};
