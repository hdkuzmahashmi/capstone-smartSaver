import useSWR from "swr";
import styled from "styled-components";
import ExpenseListDetail from "../ExpenseListDetail";

const ExpenseTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Th = styled.th`
  border: 1px solid #000;
  padding: 8px;
  text-align: left;
  background-color: #444;
  color: white;
  text-align: center;
`;

const Tr = styled.tr`
  background-color: ${(props) => (props.even ? "#ddd" : "#f2f2f2")};
`;

const Td = styled.td`
  border: 1px solid #000;
  padding: 8px;
  text-align: left;
`;

const SummaryBox = styled.div`
  border: 1px solid #000;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #f7f7f7;
  text-align: center;
`;

const SummaryText = styled.h4`
  margin: 0;
  color: #333;
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

  const totalExpense = data.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div>
      <h3>Expense List</h3>
      <SummaryBox>
        <SummaryText>Total Expense: {totalExpense} €</SummaryText>
      </SummaryBox>
      <ExpenseTable>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Amount</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((expense, index) => (
            <Tr key={expense.name} even={index % 2 === 0}>
              <ExpenseListDetail
                name={expense.name}
                description={expense.description}
                amount={expense.amount}
              />
            </Tr>
          ))}
        </tbody>
      </ExpenseTable>
    </div>
  );
}

export default ExpenseList;
