import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Title>My Todo List</Title>
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

const Title = styled.p`
  margin: 0px 20px;
`;

export default Header;
