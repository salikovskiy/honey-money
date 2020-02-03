// import React from 'react';
import './App.css';
import { useRoute } from '../routes';
import { connect } from 'react-redux';

const App = props => {
  const route = useRoute(props.token);
  return route;
};

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.finance.authReducer.token,
    createdAt: state.finance.authReducer.createdAt,
  };
};

export default connect(mapStateToProps)(App);
