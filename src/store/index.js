import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import * as reducers from './exports';

export const store = createStore(combineReducers(reducers), undefined, applyMiddleware(thunk));

  