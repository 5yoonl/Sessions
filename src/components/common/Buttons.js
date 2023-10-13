import styled, { css } from "styled-components";

const large = css`
  width: 72px;
  padding: 6px 0;
  height: 80px;
  font-size: 24px;
`;
const medium = css`
  width: 60px;
  padding: 6px 0;
  height: 24px;
  font-size: 18px;
`;
const primary = css`
  background-color: skyblue;
`;

const secondary = css`
  border: 1px solid skyblue;
  background-color: white;
`;

const sizeTable = {
  large,
  medium,
};

const typeTable = {
  primary: primary,
  secondary,
};

export const StyledButton = styled.div`
  ${(props) => sizeTable[props.size]}
  ${(props) => typeTable[props.type]}
`;
