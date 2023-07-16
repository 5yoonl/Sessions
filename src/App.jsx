import React, { useState } from "react";
import { AppContainer, S } from "./appStyle";
import Box from "./components/Box/Box";
const App = () => {
  const [isDark, setIsDark] = useState(false);
  const rendingText = isDark ? "라이트 모드" : "다크모드";
  return (
    <AppContainer>
      <S.AppInputBox onClick={() => setIsDark(!isDark)}>
        {rendingText}
      </S.AppInputBox>
      <Box isDark={isDark} />
    </AppContainer>
  );
};

export default App;
