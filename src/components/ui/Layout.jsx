import React from "react";
import styled from "styled-components";

function Layout(props) {
  return <StyledLayout>{props.children}</StyledLayout>;
}

const StyledLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

export default Layout;
