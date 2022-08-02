// Action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";
const GET_TODO_ID = "GET_TODO_ID";

// Action Creator
// 할 일 추가 Action Creator
export const addTodo = (todo) => {
  return { type: ADD_TODO, todo };
};

// 할 일 삭제 Action Creator
export const deleteTodo = (todo_id) => {
  return { type: DELETE_TODO, todo_id };
};

// 할 일 완료 여부 Action Creator
export const toggleStatusTodo = (todo_id) => {
  return { type: TOGGLE_STATUS_TODO, todo_id };
};

// 아이디 가져오기 Action Creator
export const getTodoId = (todo_id) => {
  return { type: GET_TODO_ID, todo_id };
};

// initial State
const initialState = {
  list: [
    {
      id: 1, // id는 모두 고유값이어야 합니다.
      title: "리액트 강의보기",
      memo: "챕터 1부터 챕터 12까지 학습",
      isDone: false,
    },
    {
      id: 2, // id는 모두 고유값이어야 합니다.
      title: "점심 먹기",
      memo: "점심 뭐먹지..?",
      isDone: false,
    },
  ],
  todo: {
    id: 0,
    title: "",
    memo: "",
    isDone: false,
  },
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const to_do = {
        id: state.list.at(-1).id + 1,
        title: action.todo.title,
        memo: action.todo.memo,
        isDone: false,
      };
      return {
        ...state,
        list: [...state.list, to_do],
      };

    case DELETE_TODO:
      const new_todo_list = state.list.filter(
        (todo, idx) => action.todo_id !== todo.id
      );
      return {
        ...state,
        list: new_todo_list,
      };

    case TOGGLE_STATUS_TODO:
      const new_todo_list2 = state.list.map((todo) =>
        todo.id === action.todo_id ? { ...todo, isDone: !todo.isDone } : todo
      );
      return { ...state, list: new_todo_list2 };

    case GET_TODO_ID:
      const todo = state.list.find(
        (todo, idx) => parseInt(todo.id) === parseInt(action.todo_id)
      );
      return {
        ...state,
        todo: todo,
      };
    default:
      return state;
  }
};

export default todos;
