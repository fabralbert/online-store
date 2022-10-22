import {createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import * as reducers from './exports';


export const store = createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(thunk)));


// export type RootState = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

  