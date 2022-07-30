import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

function Todo({ todo, setTodos, onDeleteHanlder, onToggleHandler }) {
  return (
    <TodoItem>
      <StyledLink to={`/detail/${todo.id}`}>
        <ItemContents>
          <h2>{todo.title}</h2>
          <p>{todo.memo}</p>
        </ItemContents>
      </StyledLink>
      <ItemButtons>
        <button onClick={() => onDeleteHanlder(todo.id)}>삭제하기</button>
        <button onClick={() => onToggleHandler(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </button>
      </ItemButtons>
    </TodoItem>
  );
}

const TodoItem = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: 200px;

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
  button:nth-child(2):hover {
    background-color: #017573;
    padding: 10px;
    margin: 5px;
    border-radius: 3px;
    cursor: pointer;
    border: 1px solid white;
    color: white;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default Todo;
