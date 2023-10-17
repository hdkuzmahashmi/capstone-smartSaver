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

const fetcher = (...args) => fetch(...args).then((res) => res.json());
function ExpenseList() {
  const { data, error } = useSWR(`/api/expenses`, fetcher);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  // if (error) {
  //   return <h1>Error: {error.message}</h1>;
  // }

  return (
    <div>
      <h3>Expense List</h3>
      <ExpenseTable>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Amount</Th>
          </tr>
        </thead>

        <tbody>
          {data.map((expense) => (
            <Tr key={expense.name}>
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
