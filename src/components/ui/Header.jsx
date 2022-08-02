import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <StyledContainer>
      <StyledTitle to="/">My Todo List</StyledTitle>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  height: 50px;
  background-color: rgb(251, 255, 254);

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledTitle = styled(Link)`
  margin: 0px 20px;
  text-decoration: none;
  color: black;
`;

export default Header;
