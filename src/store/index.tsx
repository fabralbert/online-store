import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import * as reducers from './exports';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */


export const store = createStore(combineReducers(reducers), undefined, applyMiddleware(thunk));

// export type RootState = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

  