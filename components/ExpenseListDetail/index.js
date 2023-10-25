import React from "react";
import { Icon } from "@iconify/react";
import DeleteButton from "../DeleteButton";
import { StyledIcon } from "./ExpenseListDetail.styled";
import { ExpenseNumber } from "./ExpenseListDetail.styled";

import {
  ExpenseDetailContainer,
  ExpenseDetailItem,
  CustomLink,
  TitleLink,
} from "./ExpenseListDetail.styled";

function ExpenseListDetail({ name, description, amount, id, handleDelete }) {
  return (
    <ExpenseDetailContainer>
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
