import { Store, createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { state, State } from './reducers';
import { logger } from './middleware';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
  reduxThunk,
  logger
];

export const store: Store<State> = createStore(
  state,
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);
