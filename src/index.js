import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Categorieslist from './components/CategoriesList/CategoriesList';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import './stylesheets/index.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
        <Categorieslist />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
