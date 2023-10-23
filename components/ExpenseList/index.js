import useSWR from "swr";
import ExpenseListDetail from "../ExpenseListDetail";

import {
  ExpenseContainer,
  SummaryBox,
  SummaryText,
  ExpenseRow,
  StyledLink,
  Header,
  ExpenseHeader,
} from "./ExpenseList.styled";

function ExpenseList() {
  const { data, error } = useSWR(`/api/expenses`);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  const totalExpense = data.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <ExpenseContainer>
      <Header>
        <ExpenseHeader>Expense List</ExpenseHeader>
        <StyledLink href="/form">Add Expense</StyledLink>
      </Header>
      <SummaryBox>
        <SummaryText>Total Expense: {totalExpense} €</SummaryText>
      </SummaryBox>
      {data.map((expense, index) => (
        <div key={index}>
          <ExpenseRow>
            <ExpenseListDetail
              id={expense._id}
              name={expense.name}
              description={expense.description}
              amount={expense.amount}
          
            />
          </ExpenseRow>
        </div>
      ))}
    </ExpenseContainer>
  );
}

export default ExpenseList;
