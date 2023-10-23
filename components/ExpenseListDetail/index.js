import React from "react";
import { Icon } from "@iconify/react";
import DeleteButton from "../DeleteButton";

import {
  ExpenseDetailContainer,
  ExpenseDetailItem,
  CustomLink,
} from "./ExpenseListDetail.styled";

function ExpenseListDetail({ name, description, amount, id, handleDelete }) {
  return (
    <ExpenseDetailContainer>
      <ExpenseDetailItem>{name}</ExpenseDetailItem>
      <ExpenseDetailItem>{description}</ExpenseDetailItem>
      <ExpenseDetailItem>{amount} €</ExpenseDetailItem>

      <CustomLink href={`form/${id}`}>
        <Icon icon="bx:edit" width="24" height="24" />
      </CustomLink>
      <DeleteButton expenseId={id} handleDelete={handleDelete}></DeleteButton>
    </ExpenseDetailContainer>
  );
}

export default ExpenseListDetail;
