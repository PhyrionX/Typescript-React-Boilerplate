import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';
import { App } from './containers/App';
import { Prueba } from './containers/AppPrueba';
import './style.scss';

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Prueba} />
        <Route path='/app' component={App}/>
        <Route path='/app2' component={Prueba}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
