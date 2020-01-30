import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from './pages/authPage/AuthPage';
import DashboardPage from './pages/dashboardPage/DashboardPage';
import StatisticPage from './pages/statisticsPage/StatisticPage';

export const useRoute = isAuth => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/statistics" component={StatisticPage} />
        <Redirect to="/dashboard" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/auth" component={AuthPage} />
      <Redirect to="/auth" />
    </Switch>
  );
};
