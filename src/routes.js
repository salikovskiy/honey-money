import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from './pages/authPage/AuthPage';
import DashboardPage from './pages/dashboardPage/DashboardPage';
import StatisticPage from './pages/statisticsPage/StatisticsPage';
import Footer from './components/footer/Footer';
import css from './routes.module.css';
<<<<<<< HEAD
=======
import Header from './components/header/Header';
>>>>>>> 3cec32941fe64ceecc10508214d6f82a72149662

export const useRoute = isAuth => {
  if (isAuth) {
    return (
      <>
        <Header />
        <div className={css.container}>
          <Switch>
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/statistics" component={StatisticPage} />
            <Redirect to="/dashboard" />
          </Switch>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <Switch>
      <Route path="/auth" component={AuthPage} />
      <Redirect to="/auth" />
    </Switch>
  );
};
