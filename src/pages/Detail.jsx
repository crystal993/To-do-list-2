import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTodoId } from "../redux/modules/todos";

function Detail() {
  const navigate = useNavigate();

  const todo = useSelector((state) => state.todos.todo);

  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoId(id));
    console.log(dispatch);
  }, [dispatch, id]);

  console.log(todo);

  return (
    <Wrap>
      <TodoItem>
        <ItemContents>
          <p>ID : {todo.id}</p>
          <h2>{todo.title}</h2>
          <p>{todo.memo}</p>
        </ItemContents>
        <ItemButtons>
          <button onClick={() => navigate("/")}>이전으로</button>
        </ItemButtons>
      </TodoItem>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;
const TodoItem = styled.div`
  box-sizing: border-box;

  width: 50%;
  height: 300px;

  margin: 25% auto;

  border: 1px solid #017573;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgb(38, 37, 37);
`;

const ItemContents = styled.div`
  text-align: left;
`;

const ItemButtons = styled.div`
  button {
    background-color: white;
    padding: 10px;
    margin: 5px;
    border-radius: 3px;
    cursor: pointer;
    border: 1px solid #256449;
    width: 100px;
    margin-bottom: 20px;
  }
  button:nth-child(1) {
    background-color: white;
    border: 1px solid #e02b27;
  }
  button:nth-child(1):hover {
    background-color: #e02b27;
    border: 1px solid white;
    color: white;
  }
`;

export default Detail;
