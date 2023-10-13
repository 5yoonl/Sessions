import logo from "./logo.svg";
import styled from "styled-components";
import "./App.css";
import Test from "./test";

function App() {
  return (
    <TestComponent>
      <Test />
    </TestComponent>
  );
}

export default App;

const TestComponent = styled.div`
  width: 100%;
`;
