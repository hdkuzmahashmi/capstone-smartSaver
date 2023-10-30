import useSWR from "swr";
import ExpenseListDetail from "../ExpenseListDetail";
import Loading from "../Loading";
import { SummaryNumber } from "./ExpenseList.styled";

import {
  ExpenseContainer,
  SummaryBox,
  SummaryText,
  ExpenseRow,
} from "./ExpenseList.styled";

function ExpenseList({ setToast, setToastMessage }) {
  const { data, error } = useSWR(`/api/expenses`);

  if (!data) {
    return <Loading />;
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
      <SummaryBox>
        <SummaryText>Total:</SummaryText>
        <SummaryNumber>{totalExpense}€</SummaryNumber>
      </SummaryBox>
      {data.map((expense, index) => (
        <div key={index}>
          <ExpenseRow>
            <ExpenseListDetail
              id={expense._id}
              name={expense.name}
              amount={expense.amount}
              setToast={setToast}
              setToastMessage={setToastMessage}
            />
          </ExpenseRow>
        </div>
      ))}
    </ExpenseContainer>
  );
}

export default ExpenseList;
