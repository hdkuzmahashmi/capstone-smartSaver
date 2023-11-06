import React from "react";
import { ExpenseNumber } from "./ExpenseListDetail.styled";
import { Icon } from "@iconify/react";

import {
  ExpenseDetailContainer,
  ExpenseDetailItem,
  CustomLink,
  TitleLink,
} from "./ExpenseListDetail.styled";

function ExpenseListDetail({ name, description, amount, id, icon, color }) {
  return (
    <ExpenseDetailContainer>
      <Icon icon={icon} width={20} />
      <TitleLink href={`expensedetail/${id}`}>
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
