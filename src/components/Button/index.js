import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #2a92d8;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #1a73e8;
  }
`;

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
