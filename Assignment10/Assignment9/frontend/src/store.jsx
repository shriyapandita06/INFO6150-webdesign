import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import {thunk} from "redux-thunk";
import rootReducer from "../src/App/reducers";
import { configureStore } from '@reduxjs/toolkit'

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;