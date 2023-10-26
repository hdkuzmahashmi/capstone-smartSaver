import DeleteButton from "../DeleteButton";
import {
  StyledContainer,
  ButtonGroup,
  StyledButton,
  StyledHeading,
  StyledData,
  StyledMain,
} from "./ExpenseDetail.styled";

import { CustomLink } from "../ExpenseListDetail/ExpenseListDetail.styled";

function ExpenseDetail({ expense = [], handleDelete }) {
  return (
    <StyledMain>
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
          <StyledButton>Edit</StyledButton>
        </CustomLink>
        <DeleteButton
          expenseId={expense._id}
          handleDelete={handleDelete}
          showList={true}
        ></DeleteButton>
      </ButtonGroup>
    </StyledMain>
  );
}

export default ExpenseDetail;
