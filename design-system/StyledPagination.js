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
  background-color: ${({ $active }) => ($active ? "#56a2e8" : "gray")};
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    background-color: #56a2e8;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #56a2e8;
  }
`;
