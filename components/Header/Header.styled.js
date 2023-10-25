import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  color: #202020;
`;

export const StyledContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;
