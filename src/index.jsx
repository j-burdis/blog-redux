import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { Router, Route, Switch } from 'react-router-dom';
// BrowserRouter as
import { createBrowserHistory } from 'history';
import { reducer as formReducer } from 'redux-form'; 

import '../assets/stylesheets/application.scss';

import postsReducer from './reducers/postsReducer';
import PostsIndex from './containers/posts_index';
import PostsNew from './containers/posts_new'
import PostsShow from './containers/posts_show';

const reducers = combineReducers({
  // key: reducer
  posts: postsReducer,
  form: formReducer
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
          <Route path="/posts/new" exact component={PostsNew} /> 
          <Route path="/posts/:id" component={PostsShow} /> 
        </Switch>
      </div>
    </Router>
  </Provider>,
  // document.getElementById('root')
);
