import React, { useState } from "react";
import { S } from "./component";
import Button from "./components/common/Button";

const Test = () => {
  return (
    <S.SContainer>
      <S.STitle>안녕하세요</S.STitle>
      <S.STitle>안녕하세요</S.STitle>
      <S.STitle color="yellow">안녕하세요</S.STitle>
      <S.Box type="square" />
      <S.Box type="circle" />
      <Button type="primary" size="medium" />
      <Button size="large" />
    </S.SContainer>
  );
};

export default Test;
