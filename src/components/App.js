// import React from 'react';
import './App.css';
import { useRoute } from '../routes';

const App = () => {
  const route = useRoute(false);
  return route;
};

export default App;
