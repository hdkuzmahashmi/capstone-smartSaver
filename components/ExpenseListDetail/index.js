import React from "react";
import styled from "styled-components";

const ExpenseDetailContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ExpenseDetailItem = styled.div`
  flex: 1;
  padding: 8px;
  text-align: left;
  display: flex;
  align-items: center;
`;

function ExpenseListDetail({ name, description, amount }) {
  return (
    <ExpenseDetailContainer>
      <ExpenseDetailItem>{name}</ExpenseDetailItem>
      <ExpenseDetailItem>{description}</ExpenseDetailItem>
      <ExpenseDetailItem>{amount} €</ExpenseDetailItem>
    </ExpenseDetailContainer>
  );
}

export default ExpenseListDetail;
