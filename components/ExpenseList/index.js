import useSWR from "swr";
import styled from "styled-components";
import ExpenseListDetail from "../ExpenseListDetail";
import Link from "next/link";

const ExpenseContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70vh;
`;

const ExpenseHeader = styled.h3`
  text-align: left;
  flex-grow: 3;
`;

const SummaryBox = styled.div`
  box-shadow: 2px 2px 5px #888888;
  border: none;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #333;
  text-align: center;
  border-radius: 8px;
`;

const SummaryText = styled.h4`
  margin: 0;
  color: #f7f7f7;
`;

const ExpenseRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-shadow: 2px 2px 5px #888888;
  border: none;
  padding: 10px;
  margin-bottom: 6px;
  background-color: #f7f7f7;
  text-align: center;
  border-radius: 8px;
`;

// styled the add expense link and title header
const StyledLink = styled(Link)`
  text-decoration: none;
  color: gray;
  border: 0.1rem solid black;
  padding: 0.9rem;
  border-radius: 0.5rem;
  height: 90%;
`;
const Header = styled.div`
  display: flex;
  gap: 1rem;
  bottom: 2rem;
`;

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
              name={expense.name}
              description={expense.description}
              amount={expense.amount}
              id={expense._id}
            />
          </ExpenseRow>
        </div>
      ))}
    </ExpenseContainer>
  );
}

export default ExpenseList;
