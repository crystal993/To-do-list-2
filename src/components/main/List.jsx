import React, { useCallback } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../../redux/modules/todos";

import Todo from "./Todo";

function List() {
  // 스토어에 저장된 값을 가져온다.
  const todos = useSelector((state) => state.todos.list);
  console.log("List:", todos);
  const dispatch = useDispatch();

  const onDeleteHanlder = useCallback(
    (todoId) => {
      dispatch(deleteTodo(todoId));
    },
    [dispatch]
  );

  const onToggleHandler = useCallback(
    (todoId) => {
      dispatch(toggleStatusTodo(todoId));
    },
    [dispatch]
  );

  return (
    <Container>
      <h3>Working.. 🔥</h3>
      <TodoItemList>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              {/* 할 일 하는 중 */}
              {todo.isDone === false && (
                <Todo
                  todo={todo}
                  key={todo.id}
                  onDeleteHanlder={onDeleteHanlder}
                  onToggleHandler={onToggleHandler}
                />
              )}
            </div>
          );
        })}
      </TodoItemList>
      <h3>Done..!🎉</h3>
      {/* 할 일 완료 */}
      {/* <Todo todo={todo} key={todo.id}></Todo> */}
      <CompletedItemList>
        {todos.map((todo) => {
          // eslint-disable-next-line no-lone-blocks
          return (
            <div key={todo.id}>
              {todo.isDone === true && (
                <Todo
                  todo={todo}
                  key={todo.id}
                  onDeleteHanlder={onDeleteHanlder}
                  onToggleHandler={onToggleHandler}
                />
              )}
            </div>
          );
        })}
      </CompletedItemList>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  background-color: rgb(255, 255, 255);
  height: 250px;
  margin: 0px 20px;
`;

const TodoItemList = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  height: 240px;
  div {
    margin: 5px;
  }
`;

const CompletedItemList = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  height: 240px;
  div {
    margin: 5px;
  }
  div:nth-child(1) {
    margin-left: 0px;
  }
`;

const TodoItem = styled.div``;

export default List;
