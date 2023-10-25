import styled from "styled-components";

export const StyledMain = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 0.9rem;
  padding-left: 5%;
  padding-top: 5%;
`;

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const StyledDiv = styled.div`
  padding: 10px;
  margin: 10px 0;
`;

export const StyledHeading = styled.span`
  font-weight: bold;
`;

export const StyledData = styled.span`
  grid-row: span 1;
`;

// need to move in seperate file
export const ButtonGroup = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
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
