import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 8px;
  border-radius: 15px;
  padding: 0.5rem 0;
  gap: 1rem;
`;

export const PaginationButton = styled.button`
  height: 42px;
  width: 42px;
  box-shadow: inset -0.13em -0.15em 0.2em rgba(0, 0, 0, 0.2);
  background: ${({ $active }) =>
    $active ? "linear-gradient(to right, #78b3e6, #1c91e3);" : "gray"};
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    /* border: 1px solid black; */
    box-shadow: inset -0.1em -0.1em 0.15em rgba(0, 0, 0, 0.2),
      inset 0.01em 0.03em 0.8em rgba(0, 0, 0, 0.3),
      0.06em 0 0.4em rgba(0, 0, 0, 0.21);
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #56a2e8;
  }
`;
