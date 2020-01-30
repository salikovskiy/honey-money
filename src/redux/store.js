import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducer';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [thunk];
const enhancer = combineReducers({
  finance: persistedReducer,
});

export const store = createStore(
  enhancer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export const persistor = persistStore(store);
