import React from "react";
import styled from "styled-components";
import { Title } from "./PageTitle/PageTitle.jsx";
const Div = ({ title }) => {
  return (
    <StyledDiv>
      <Title title={title} />
      dsjfhajlfhasdjlhjk
    </StyledDiv>
  );
};

export default Div;

export const StyledDiv = styled.div`
  width: 100%;
`;
