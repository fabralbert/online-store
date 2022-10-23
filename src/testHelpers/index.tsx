import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import * as reducers from '../store/exports';

export function createTestStore() {

  const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

  return store;
}