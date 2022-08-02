import React, { useRef, useState, useCallback, useEffect } from "react";

import List from "./List";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/todos";

function Form() {
  const dispatch = useDispatch();
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
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // 컴포넌트 최적화를 위해 useCallback을 사용
  const onChangeHandler = useCallback(
    (e) => {
      const { name, value } = e.target;
      setTodo({ ...todo, [name]: value, isDone: false });
    },
    [todo]
  );

  const onSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(addTodo({ ...todo }));
      // [...todos, todo]
      setTodo(initialState); //input값 초기값으로 다시 세팅
      inputRef.current.focus(); // 등록될 때마다 input에 focus 주기
    },
    [dispatch, todo, initialState]
  );

  return (
    <div>
      <StyledForm onSubmit={onSubmitHandler}>
        <StyledContainer>
          <label>제목</label>
          <input
            name="title"
            type="text"
            onChange={onChangeHandler}
            ref={inputRef}
            value={todo.title}
            required
          ></input>
          <label>내용</label>
          <input
            name="memo"
            type="text"
            value={todo.memo}
            onChange={onChangeHandler}
            required
          ></input>
        </StyledContainer>
        <button>추가하기</button>
      </StyledForm>
    </div>
  );
}

const StyledForm = styled.form`
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

const StyledContainer = styled.div`
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

export default React.memo(Form);
