import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './app';
import { About ,TodoListPageContainer } from './components'

const routes = {
  path: '/',
  component: App,
  indexRoute: {
    component:About
  },
  childRoutes: [
    { path: '/todo', component: TodoListPageContainer },
    { path: '/todo2', component: TodoListPageContainer },
  ]
}

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Provider store={store}>
      <Router history={hashHistory} routes={routes}/>
    </Provider>
  );
}
