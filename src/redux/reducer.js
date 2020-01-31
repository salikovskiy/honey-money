import { combineReducers } from 'redux';
import Type from './types';

const costs = (state = [], { type, payload }) => {
  switch (type) {
    case Type.GET_COSTS_SUCCESS:
      return payload.arr;
    default:
      return state;
  }
};

const isLoading = (state = false, { type, payload }) => {
  switch (type) {
    case Type.FETCH_START:
      return (state = true);
    case Type.GET_BALANCE_SUCCESS:
    case Type.GET_COSTS_SUCCESS:
    case Type.FETCH_ERROR:
      return (state = false);
    default:
      return state;
  }
};
const balance = (state = 0, { type, payload }) => {
  switch (type) {
    case Type.GET_BALANCE_SUCCESS:
      return payload.value;
    default:
      return state;
  }
};

const dateNow = (state = '', { type, payload }) => {
  switch (type) {
    case(Type.DATE_NOW):
    return payload.date
    default:
      return state;
  }
};

const token = (state = '', { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const error = (state = '', { type, payload }) => {
  switch (type) {
    case Type.FETCH_ERROR:
      return payload.error;
      case Type.FETCH_START:
      case Type.GET_BALANCE_SUCCESS:
      case Type.GET_COSTS_SUCCESS:
        return state = ''
    default:
      return state;
  }
};

export default combineReducers({
  costs,
  balance,
  isLoading,
  dateNow,
  token,
  error,
});
