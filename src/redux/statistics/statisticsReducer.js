import Type from '../types';

const categories = (state = [], { type, payload }) => {
  switch (type) {
    case Type.GET_CATEGORIES_SUCCESS:
      return payload.categories;
    default:
      return state;
  }
};

export default categories;
