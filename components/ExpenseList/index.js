import useSWR from "swr";
import styled from "styled-components";
import ExpenseListDetail from "../ExpenseListDetail";

const ExpenseContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExpenseHeader = styled.h3`
  text-align: center;
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

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function ExpenseList() {
  const { data, error } = useSWR(`/api/expenses`, fetcher);

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
      <ExpenseHeader>Expense List</ExpenseHeader>
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
            />
          </ExpenseRow>
        </div>
      ))}
    </ExpenseContainer>
  );
}

export default ExpenseList;
