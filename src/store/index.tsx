import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import * as reducers from './exports';

export const store = createStore(combineReducers(reducers), undefined, applyMiddleware(thunk));

// export type RootState = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

  