import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container>
      <Title to="/">My Todo List</Title>
    </Container>
  );
}

const Container = styled.div`
  height: 50px;
  background-color: rgb(251, 255, 254);

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled(Link)`
  margin: 0px 20px;
  text-decoration: none;
  color: black;
`;

export default Header;
