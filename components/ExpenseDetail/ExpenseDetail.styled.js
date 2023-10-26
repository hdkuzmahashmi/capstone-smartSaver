import styled from "styled-components";

export const StyledMain = styled.div`
  background-color: #fff;
  box-shadow: inset 0 0 35px 5px rgba(0, 0, 0, 0.1),
    inset 0 2px 1px 1px rgba(255, 255, 255, 0.9),
    inset 0 -2px 1px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.9rem;
  padding: 5% 0 0 5%;
  margin: 1.2rem 10px 0 10px;
  color: #202020;
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
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 2rem;
`;

export const StyledButton = styled.button`
  border: none;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
  background-color: transparent;
  color: #202020;
  transition: all 0.3s ease;
  text-decoration: ${(props) => (props.$link ? "none" : null)};
  margin-bottom: -1.8rem;

  &:hover {
    transform: translate(0, 2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translate(0, 0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
