import styled from "styled-components";
import { css } from "styled-components";

export const StyledButton = styled.button`
  margin: ${(props) => (props.$isSubmitButton ? "1rem 0" : "0")};
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 0.375rem;
  outline: none;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  color: ${(props) => (props.$isDeleteButton ? "white" : "#202020")};
  cursor: pointer;
  transition: all 0.26s ease;
  text-decoration: ${(props) => (props.$link ? "none" : null)};
  outline: ${(props) => (props.$isDeleteButton ? "#ca0b00" : "rgba(0,0,0,0.2)")}
    1px solid;
  background-color: ${(props) => (props.$isDeleteButton ? "#f32013" : "")};
  width: ${(props) => (props.$isSubmitButton ? "30%" : "")};

  &:active {
    transform: translate(0, 0);
  }

  ${({ $isLoginButton }) =>
    $isLoginButton &&
    css`
      display: flex;
      align-items: center;
      font-weight: 500;
      color: #fff;
      background: linear-gradient(to right, #1c91e3, #78b3e6);
      border: 1px solid #1c91e3;
      box-shadow: inset -0.4em -0.3em 0.4em #1c91e3,
        0.05em 0.05em 0.15em #78b3e6, 0.02em 0.02em 0.5em rgba(0, 0, 0, 0.04);

      &:hover {
        border: 1px solid #1c91e3;
        box-shadow: inset -0.2em -0.1em 0.35em #1c91e3,
          inset 0 0.04em 0 rgba(0, 0, 0, 0.8);
      }
    `};
`;
