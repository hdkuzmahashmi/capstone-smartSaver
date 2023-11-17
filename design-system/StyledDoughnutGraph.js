import styled from "styled-components";

export const GraphContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  margin-top: 3rem;
  gap: 5vh;
  width: 100%;
  box-shadow: inset 0 0 35px 5px rgba(0, 0, 0, 0.1),
    inset 0 2px 1px 1px rgba(255, 255, 255, 0.9),
    inset 0 -2px 1px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 2vh;
    flex-direction: column;
  }
`;

export const ExpenseOverviewContainer = styled.div`
  position: relative;
`;

export const TotalContainer = styled.div`
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #202020;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transition: font-size 0.3s ease;

  &:hover {
    font-size: 20px;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0.2rem;
  width: 100%;
  gap: 0.3rem;
  font-size: 13px;
`;

export const ColorBox = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 0.3rem;
`;

export const ItemName = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Amount = styled.div`
  white-space: nowrap;
  margin-right: 5px;
`;
