import React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClickFunction?: React.MouseEventHandler<HTMLButtonElement>;
  isClicked?: boolean;
}

const Button = (props: Props) => {
  return (
    <StyledButton
      className={props.className}
      onClick={props.onClickFunction}
      isClicked={props.isClicked}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<Props>`
  border: none;
  background-color: ${(props) =>
    props.isClicked
      ? props.theme.colors.loading
      : props.theme.colors.background2};
  color: ${(props) => props.theme.colors.secondary};
  transition: background-color 0.2s ease;
  padding: 10px 20px;
`;
