// 1. 스토어 생성
import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import todos from "../modules/todos";

const rootReducer = combineReducers({
  todos,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
