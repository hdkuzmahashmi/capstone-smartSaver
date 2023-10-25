import styled from "styled-components";
import Link from "next/link";

export const ExpenseContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top: 1rem;
`;

export const SummaryBox = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  border: none;
  padding: 14px;
  background-color: #202020;
  color: #f5f5f5;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SummaryText = styled.h4`
  margin: 0;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.2);
`;

export const SummaryNumber = styled.span`
  font-weight: 500;
  font-size: 3rem;
`;

export const ExpenseRow = styled.div`
  box-shadow: rgba(32, 32, 32, 0.1) 0px 30px 60px -12px inset;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid rgba(32, 32, 32, 0.5);
  padding: 1rem;

  background-color: #f7f7f7;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  border-bottom: 0.1rem solid #333;
  padding: 0.5rem 1rem;
  transition: background-color 0.2s, color 0.2s, transform 0.2s;

  &:hover {
    background-color: #333;
    color: white;
    transform: translateY(-2px);
  }
`;
