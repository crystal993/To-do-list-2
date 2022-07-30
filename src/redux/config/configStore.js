// 1. 스토어 생성
import { createStore } from "redux";
import { combineReducers } from "redux";

// 2. 모듈 가져오기
import todos from "../modules/todos";

// 2. 커운터 모듈을 스토어에 연결하기
const rootReducer = combineReducers({
  todos,
});

// 1. 스토어 생성
const store = createStore(rootReducer);

export default store;
