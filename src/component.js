import styled, { css } from "styled-components";

const squareBox = css`
  width: 40px;
  height: 40px;
  background-color: black;
`;

const circleBox = css`
  width: 40px;
  height: 40px;
  background-color: black;
  border-radius: 50%;
`;

const Boxtype = {
  square: squareBox,
  circle: circleBox,
};

export const S = {
  SContainer: styled.div`
    display: flex;
  `,
  ImageWrapper: styled.div`
    display: flex;
    gap: 0 12px;
  `,
  STitle: styled.div`
    font-size: 36px;
    font-weight: 800;
    color: ${(props) => props.color || "blue"};
  `,
  Box: styled.div`
    ${({ type }) => Boxtype[type]}
  `,
};
export const Container = styled.div`
  width: 100vw;
  display: flex;
  height: 100vh;
  flex-direction: column;
  gap: 12px;
  background-color: pink;
`;
export const Div = styled.div`
  font-size: 24px;
  color: blue;
`;
export const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: black;
`;
export const ImageWrapper = styled.div`
  display: flex;
  gap: 0 12px;
`;
export const Item = styled.div`
  width: 120px;
  aspect-ratio: 1/1;
  background-color: ${(props) => props.backColor};
  background-color: ${(props) => props.theme.backColor};
  ${(props) => props.isActive && active}
`;
const active = css`
  border: 4px solid blue;
`;
