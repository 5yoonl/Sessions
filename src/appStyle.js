import styled from "styled-components";

export const AppContainer = styled.div``;

export const S = {
  AppInputBox: styled.div`
    width: 100%;
    height: 48px;
    border: 1px solid black;
    ${(props) => props.theme.flex.center}
  `,
};
