import styled, { css } from "styled-components";

const DarkMode = css`
  background-color: black;
  color: white;
`;

const LightMode = css`
  background-color: white;
  color: black;
`;

export const S = {
  DarkmodeBox: styled.div`
    width: 100%;
    height: 100vh;
    ${({ isDark }) => (isDark ? DarkMode : LightMode)}
    ${(props) => props.theme.flex.center}
  `,
};
