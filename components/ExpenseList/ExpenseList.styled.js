import styled from "styled-components";
import Link from "next/link";


export const ExpenseContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70vh;
`;

export const SummaryBox = styled.div`
  box-shadow: 2px 2px 5px #888888;
  border: none;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #333;
  text-align: center;
  border-radius: 8px;
`;

export const SummaryText = styled.h4`
  margin: 0;
  color: #f7f7f7;
`;

export const ExpenseRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-shadow: 2px 2px 5px #888888;
  border: none;
  padding: 10px;
  margin-bottom: 6px;
  background-color: #f7f7f7;
  text-align: center;
  border-radius: 8px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333; 
  border: 0.1rem solid #333; 
  padding: 0.5rem 1rem; 
  border-radius: 0.5rem;
  transition: background-color 0.2s, color 0.2s, transform 0.2s;

  &:hover {
    background-color: #333; 
    color: white; 
    transform: translateY(-2px); 
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f5f5f5; 
`;

export const ExpenseHeader = styled.h3`
  text-align: left;
  margin: 0;
  flex-grow: 1;
`;