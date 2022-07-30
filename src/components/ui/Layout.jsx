import React from "react";
import styled from "styled-components";

function Layout(props) {
  return <Layouts>{props.children}</Layouts>;
}

const Layouts = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

export default Layout;
