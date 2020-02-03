import React from 'react';
import './App.css';
import { useRoute } from '../routes';
import Loader from './../components/Loader/LoaderThreeDots';
import { connect } from 'react-redux';

const App = props => {
  const route = useRoute(true);
  const isLoading = props.finance.isLoading;
  return (
    <>
      {isLoading && <Loader />}
      {route}
    </>
  );
};
const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
