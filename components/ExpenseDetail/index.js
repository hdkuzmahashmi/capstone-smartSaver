import DeleteButton from "../DeleteButton";
import {
  Container,
  Span,
  ButtonGroup,
  StyledButton,
} from "./ExpenseDetail.styled";

import { CustomLink } from "../ExpenseListDetail/ExpenseListDetail.styled";

function ExpenseDetail({ expense = [], handleDelete }) {
  return (
    <Container>
      <Span>
        <b>Name:</b>{" "}
      </Span>{" "}
      <Span>{expense.name}</Span>
      <Span>
        <b>Description:</b>{" "}
      </Span>{" "}
      <Span> {expense.description}</Span>
      <Span>
        <b>Category:</b>{" "}
      </Span>{" "}
      <Span> {expense.categoryId[0].name}</Span>
      <Span>
        <b>Amount:</b>{" "}
      </Span>{" "}
      <Span> {expense.amount} €</Span>
      <ButtonGroup>
        <CustomLink href={`./`}>
          <StyledButton>Back</StyledButton>
        </CustomLink>
        <CustomLink href={`../form/${expense._id}`}>
          <StyledButton>Edit</StyledButton>
        </CustomLink>

        <DeleteButton
          expenseId={expense._id}
          handleDelete={handleDelete}
          showList={true}
        ></DeleteButton>
      </ButtonGroup>
    </Container>
  );
}

export default ExpenseDetail;
