import Link from "next/link";
import styled from "styled-components";

export const ExpenseDetailContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
`;

export const ExpenseDetailItem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 1.05rem;
  height: 2.2rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const CustomLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const TitleLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  max-width: 220px;
  padding-left: 5%;
  &:hover {
    color: coral;
    transform: translateY(-2px);
  }
`;

export const ExpenseNumber = styled.span`
  margin-left: auto;
  font-weight: 500;
`;

export const StyledColorDiv = styled.div`
  background-color: ${({ $color }) => $color};
  width: 2%;
  height: 100%;
  margin-right: 0;
  padding-right: 0;
`;
