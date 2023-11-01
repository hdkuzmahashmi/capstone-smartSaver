import styled from "styled-components";

export const StyledButton = styled.button`
  margin: ${(props) => (props.$isSubmitButton ? "1rem 0" : "0")};
  padding: 0.5rem 0.75rem;
  background-color: #fff;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0.375rem;
  outline: none;
  font-size: 1rem;
  color: gray;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: ${(props) => (props.$link ? "none" : null)};

  &:hover {
    transform: translate(0, 2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translate(0, 0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
