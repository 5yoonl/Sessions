import React from "react";
import { StyledButton } from "./Buttons";
const Button = ({ type = "secondary", size = "large", isActive, onClick }) => {
  const handleClick = () => {
    if (isActive) {
      onClick();
    } else {
      return;
    }
  };
  return (
    <StyledButton type={type} size={size} onClick={handleClick}>
      Button
    </StyledButton>
  );
};

export default Button;
