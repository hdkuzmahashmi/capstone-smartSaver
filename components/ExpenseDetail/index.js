import DeleteButton from "../DeleteButton";
import {
  StyledContainer,
  ButtonGroup,
  StyledButton,
  StyledHeading,
  StyledData,
  StyledDetailContainer,
} from "./ExpenseDetail.styled";

import { CustomLink } from "../ExpenseListDetail/ExpenseListDetail.styled";
import { Icon } from "@iconify/react";

function ExpenseDetail({
  expense = [],
  handleDelete,
  setToast,
  setToastMessage,
}) {
  return (
    <StyledDetailContainer>
      <StyledContainer>
        <StyledHeading>Name</StyledHeading>{" "}
        <StyledData>{expense.name}</StyledData>
        <StyledHeading>Description</StyledHeading>{" "}
        <StyledData> {expense.description}</StyledData>
        <StyledHeading>Category</StyledHeading>{" "}
        <StyledData> {expense.categoryId[0].name}</StyledData>
        <StyledHeading>Amount</StyledHeading>{" "}
        <StyledData> {expense.amount} €</StyledData>
      </StyledContainer>
      <ButtonGroup>
        <CustomLink href={`/form/${expense._id}`}>
          <StyledButton>
            <Icon icon="icon-park-outline:edit" width="24" />
          </StyledButton>
        </CustomLink>
        <DeleteButton
          expenseId={expense._id}
          handleDelete={handleDelete}
          showList={true}
          setToast={setToast}
          setToastMessage={setToastMessage}
        ></DeleteButton>
      </ButtonGroup>
    </StyledDetailContainer>
  );
}

export default ExpenseDetail;
