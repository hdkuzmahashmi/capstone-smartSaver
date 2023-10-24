import styled from "styled-components";

export const Container = styled.div`
  max-width: 20rem;
  width: 24rem;
  border-radius: 0.3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Span = styled.span`
  grid-row: span 2;
`;

// need to move in seperate file
export const ButtonGroup = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled.button`
  padding: 0.5rem 0.75rem;
  background-color: #fff;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0.375rem;
  outline: none;
  font-size: 1rem;
  color: gray;
  margin-right: 0.5rem;
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
