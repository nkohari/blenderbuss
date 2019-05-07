import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from 'src/data';

export function configureStoreForProduction(initialState) {
  const store = createStore(combineReducers(reducers), initialState, applyMiddleware(thunk));
  return store;
}
