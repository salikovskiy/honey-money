import { combineReducers } from 'redux';
const initState = { authError: null, token: null };

const costs = (state = [], { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const isLoading = (state = true, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
const balance = (state = 0, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const dateNow = (state = '', { type, payload }) => {
  switch (type) {
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
    default:
      return state;
  }
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('login failed');
      return {
        ...state,
        authError: action.err.message,
        token: '',
      };
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: null,
        token: action.responce.data.user.token,
      };
    case 'SIGNUP_SUCCESS':
      console.log('signup success');
      console.log(action);
      return {
        ...state,
        authError: null,
        token: action.responce.data.user.token,
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

export default combineReducers({
  authReducer,
  costs,
  balance,
  isLoading,
  dateNow,
  token,
  error,
});
