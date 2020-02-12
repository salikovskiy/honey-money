import { combineReducers } from 'redux';
import Type from './types';
import { getUser } from './selectors';
import categories from '../redux/statistics/statisticsReducer';
const initState = { authError: null, createdAt: '' };

const costs = (state = [], { type, payload }) => {
  switch (type) {
    case Type.COSTS_POST_SUCCESS:
      return [...state, payload.obj];
    case Type.GET_COSTS_SUCCESS:
      return payload.arr;
    case Type.COSTS_DELETE_SUCCESS:
      return state.filter(el => payload.id !== el.costsId);
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
    case Type.COSTS_POST_SUCCESS:
      return (state = false);
    case Type.GET_CATEGORIES_SUCCESS:
      return (state = false);
    default:
      return state;
  }
};

const balance = (state = null, { type, payload }) => {
  switch (type) {
    case Type.GET_BALANCE_SUCCESS:
      return payload.value;
    default:
      return state;
  }
};

const dateNow = (state = '', { type, payload }) => {
  switch (type) {
    case Type.DATE_NOW:
      return payload.date;
    default:
      return state;
  }
};

// const error = (state = '', { type, payload }) => {
//   switch (type) {
//     default:
//       return state;
//   }
// };

const error = (state = '', { type, payload }) => {
  switch (type) {
    case Type.FETCH_ERROR:
      return payload.error;
    case Type.FETCH_START:
    case Type.GET_BALANCE_SUCCESS:
    case Type.GET_COSTS_SUCCESS:
      return (state = '');
    default:
      return state;
  }
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOG_OUT':
      return {
        ...state,
        token: '',
      };
    case 'LOGIN_ERROR':
      console.log('login failed');
      return {
        ...state,
        authError: action.err.message,
        token: '',
      };
    case 'LOGIN_SUCCESS':
      console.log('login success');
      console.log('action', action);
      return {
        ...state,
        authError: null,
        token: getUser(action).token,
        createdAt: getUser(action).userData.createdAt,
      };
    case 'SIGNUP_SUCCESS':
      console.log('signup success');
      console.log(action);
      return {
        ...state,
        authError: null,
        token: getUser(action).token,
      };
    case 'SIGNUP_ERROR':
      console.log('signup error');
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};

const incomes = (state = [], { type, payload }) => {
  switch (type) {
    case Type.GET_INCOMES_SUCCESS:
      return payload.arr;
    default:
      return state;
  }
};

export default combineReducers({
  authReducer,
  costs,
  balance,
  isLoading,
  dateNow,
  error,
  incomes,

  // statistics
  categories,
});
