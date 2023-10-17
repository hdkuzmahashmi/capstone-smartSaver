import useSWR from "swr";
import styled from "styled-components";

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
      <h2>Expense List</h2>
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
              <Td>{expense.name}</Td>
              <Td>{expense.description}</Td>
              <Td>{expense.amount} $</Td>
            </Tr>
          ))}
        </tbody>
      </ExpenseTable>
    </div>
  );
}

export default ExpenseList;
