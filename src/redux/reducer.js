import { combineReducers } from 'redux';

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

export default combineReducers({
  costs,
  balance,
  isLoading,
  dateNow,
  token,
  error,
});
