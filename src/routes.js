/*eslint-disable import/default */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import TreeView from './components/search/TreeView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={TreeView} />
  </Route>
);
