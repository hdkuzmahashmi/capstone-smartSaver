import styled from "styled-components";

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
  transition: all 0.3s ease;
  text-decoration: ${(props) => (props.$link ? "none" : null)};
  outline: ${(props) => (props.$isDeleteButton ? "#ca0b00" : "rgba(0,0,0,0.2)")}
    1px solid;
  background-color: ${(props) => (props.$isDeleteButton ? "#f32013" : "")};
  width: ${(props) => (props.$isSubmitButton ? "30%" : "")};

  &:hover {
    transform: translate(0, 2px);
  }

  &:active {
    transform: translate(0, 0);
  }
`;
