import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContextProvider from './contexts';
import PageBase from './pages/PageBase';
import pages from './pages';

const App = ({ history, store }) => (
  <Provider store={store}>
    <Router history={history}>
      <AppContextProvider>
        <Switch>
          <Route component={pages.Login} exact path="/" />
          <Route component={pages.Register} exact path="/register" />
          <PageBase>
            <Route component={pages.Home} exact path="/home" />
            <Route component={pages.FilterTest} exact path="/filter" />
          </PageBase>
          <Route component={pages.Error404} />
        </Switch>
      </AppContextProvider>
    </Router>
  </Provider>
);

export default hot(App);

App.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};
