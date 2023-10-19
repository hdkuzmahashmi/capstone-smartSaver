import { Container, Span } from "./Expense.styled";

function Expense({ expense = [] }) {
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
    </Container>
  );
}

export default Expense;
