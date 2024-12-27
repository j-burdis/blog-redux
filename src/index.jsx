import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { Router, Route, Switch } from 'react-router-dom';
// BrowserRouter as
import { createBrowserHistory } from 'history';

import '../assets/stylesheets/application.scss';
import postsReducer from './reducers/postsReducer';
import PostsIndex from './containers/posts_index';

const reducers = combineReducers({
  // key: reducer
  posts: postsReducer
});

const history = createBrowserHistory();

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <div className="thin.container">
        <Switch>
          {/* TODO - define routes here */}
          <Route path="/" exact component={PostsIndex} /> 
        </Switch>
      </div>
    </Router>
  </Provider>,
  // document.getElementById('root')
);
