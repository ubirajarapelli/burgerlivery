import styled from "styled-components";

export const ButtonElement = styled.button`
  border: 1px solid darkgray;
  padding: 16px 24px;
  font-size: 16px;
  border-radius: 8px;
  &:hover {
    background-color: darkgrey;
  }

  ${(props) =>
    props.size === "large" &&
    `
      padding: 24px 32px;
      font-size: 18px;
  `}

  ${(props) =>
    props.variant === "info" &&
    `
    background-color: darkblue;
    color: white;
    &:hover {
      background-color: lightblue;
    }
  `}

  ${(props) =>
    props.variant === "danger" &&
    `
    background-color: darkred;
    color: white;
    &:hover {
      background-color: red
    }
  `}
`;
