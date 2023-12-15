import styled from "styled-components";
import { Icon } from "@iconify/react";

export const GraphContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin-top: 1rem;
  gap: 4vh;
  width: 100%;
  box-shadow: inset 0 0 35px 5px rgba(0, 0, 0, 0.1),
    inset 0 2px 1px 1px rgba(255, 255, 255, 0.9),
    inset 0 -2px 1px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 0.5vh;
    width: 100%;
    justify-content: space-between;
  }
`;

export const ExpenseOverviewContainer = styled.div`
  position: relative;
  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
    margin-left: -15px;
  }
`;

export const TotalContainer = styled.div`
  position: absolute;
  top: 51.5%;
  left: 51.5%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: #333;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transition: font-size 0.3s ease;

  @media (max-width: 768px) {
    top: 52.5%;
    left: 51.5%;
    font-size: 0.75rem;
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

  @media (max-width: 768px) {
    font-size: 9px;
    margin: 0.04rem;
    gap: 0.1rem;
    & > ${Icon} {
      width: 10px;
    }
  }
`;

export const ColorBox = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 0.3rem;

  @media (max-width: 768px) {
    width: 6px;
    height: 6px;
  }
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

export const IconWrapper = styled.div`
  & > ${Icon} {
    width: 10px;
  }
`;
