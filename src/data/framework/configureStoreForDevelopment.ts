import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { reducers } from 'src/data';

export function configureStoreForDevelopment(initialState) {
  const store = createStore(combineReducers(reducers), initialState, applyMiddleware(thunk, createLogger()));

  if (module.hot) {
    module.hot.accept('src/data', () => {
      const newRootReducer = require('src/data');
      store.replaceReducer(newRootReducer);
    });
  }

  return store;
}
