import React from "react";
import { ExpenseNumber } from "./ExpenseListDetail.styled";

import {
  ExpenseDetailContainer,
  ExpenseDetailItem,
  TitleLink,
} from "./ExpenseListDetail.styled";

function ExpenseListDetail({ name, description, amount, id }) {
  return (
    <ExpenseDetailContainer>
      <TitleLink href={`expense/${id}`}>
        <ExpenseDetailItem>{name}</ExpenseDetailItem>
      </TitleLink>

      <ExpenseDetailItem>{description}</ExpenseDetailItem>
      <ExpenseDetailItem>
        <ExpenseNumber>{amount} €</ExpenseNumber>
      </ExpenseDetailItem>
    </ExpenseDetailContainer>
  );
}

export default ExpenseListDetail;
