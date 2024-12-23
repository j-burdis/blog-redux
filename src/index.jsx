import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';

import '../assets/stylesheets/application.scss';

const reducers = combineReducers({
  // key: reducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <Switch>
        TODO
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
