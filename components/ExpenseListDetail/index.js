import React from "react";
import { Icon } from "@iconify/react";
import DeleteButton from "../DeleteButton";

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
      <ExpenseDetailItem>{amount} €</ExpenseDetailItem>
      <CustomLink href={`form/${id}`}>
        <Icon icon="bx:edit" width="24" height="24" />
      </CustomLink>
      <DeleteButton
        expenseId={id}
        handleDelete={handleDelete}
        showList={false}
      ></DeleteButton>{" "}
    </ExpenseDetailContainer>
  );
}

export default ExpenseListDetail;
