import React, { useCallback } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../../redux/modules/todos";

import Todo from "./Todo";

function List() {
  const todos = useSelector((state) => state.todos.list);
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
    <StyledContainer>
      <h3>Working.. 🔥</h3>
      <StyledItemList>
        {todos.map((todo) => {
          return (
            <>
              {todo.isDone === false && (
                <Todo
                  todo={todo}
                  key={todo.id}
                  onDeleteHanlder={onDeleteHanlder}
                  onToggleHandler={onToggleHandler}
                />
              )}
            </>
          );
        })}
      </StyledItemList>
      <h3>Done..!🎉</h3>
      <StyledItemList>
        {todos.map((todo) => {
          return (
            <>
              {todo.isDone === true && (
                <Todo
                  todo={todo}
                  key={todo.id}
                  onDeleteHanlder={onDeleteHanlder}
                  onToggleHandler={onToggleHandler}
                />
              )}
            </>
          );
        })}
      </StyledItemList>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  background-color: rgb(255, 255, 255);
  margin: 0px 20px;
  display: flex;
  flex-direction: column;
`;

const StyledItemList = styled.div`
  width: 100%;
  min-height: 200px;
  height: 100%;
  text-align: center;
  flex-direction: row;
  display: flex;
  /* flex-wrap: wrap;  */
  flex-flow: row wrap;
  align-content: space-between;
  column-gap: 10px;
  row-gap: 10px;
  margin-bottom: 30px;
`;

export default React.memo(List);
