import styled from "styled-components";

export const StyledIconButton = styled.button`
  border: none;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
  background-color: transparent;
  color: #202020;
  transition: all 0.3s ease;
  text-decoration: ${(props) => (props.$link ? "none" : null)};
  margin-bottom: -4rem;

  &:hover {
    transform: translate(0, 2px);
  }

  &:active {
    transform: translate(0, 0);
  }
`;
