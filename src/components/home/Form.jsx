import React, { useRef, useState, useCallback, useEffect } from "react";

import List from "./List";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/todos";

function Form() {
  const dispatch = useDispatch();
  const nextId = useRef(3); //ID를 전역변수로 저장
  const inputRef = useRef(null); //input에 focus 주기

  // 초기값
  const initialState = {
    id: 0,
    title: "",
    memo: "",
    isDone: false,
  };

  // form에서 입력되는 데이터만 담은 state
  const [todo, setTodo] = useState(initialState);

  // 초기렌더링 시 input에 focus 주기
  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  // 컴포넌트 최적화를 위해 useCallback을 사용
  const onChangeHandler = useCallback(
    (e) => {
      const { name, value } = e.target;
      setTodo({ ...todo, [name]: value, isDone: false });
    },
    [todo]
  );

  // id 생성 함수
  const idCreate = () => {
    nextId.current += 1;
  };

  const onSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(addTodo({ ...todo, id: nextId.current }));
      idCreate();
      // [...todos, todo]
      setTodo(initialState); //input값 초기값으로 다시 세팅
      inputRef.current.focus(); // 등록될 때마다 input에 focus 주기
    },
    [dispatch, todo, initialState]
  );

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <ToDoForm>
          <InputBox>
            <label>제목</label>
            <input
              name="title"
              type="text"
              onChange={onChangeHandler}
              ref={inputRef}
              value={todo.title}
            ></input>
            <label>내용</label>
            <input
              name="memo"
              type="text"
              value={todo.memo}
              onChange={onChangeHandler}
            ></input>
          </InputBox>
          <button>추가하기</button>
        </ToDoForm>
      </form>
    </div>
  );
}

const ToDoForm = styled.div`
  background-color: rgb(242, 234, 234);
  height: 100px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  button {
    flex-grow: 1;
    border: none;
    height: 30px;
    border-radius: 5px;
    background-color: #017573;
    color: white;
    margin-right: 20px;
  }
`;

const InputBox = styled.div`
  flex-grow: 8;
  margin: 0px 10px;
  input {
    border-radius: 10px;
    border: none;
    margin: 10px 5px;
    height: 30px;
    width: 20%;
  }
  label {
    margin: 10px 15px;
  }
`;

export default Form;
