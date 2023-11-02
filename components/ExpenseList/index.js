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
    setToastMessage(
      "Something went wrong. Please contact to application administrator."
    );
    setToast();
    return; //<h1>Error: {error.message}</h1>;
  }
  let totalExpense = 0;
  try {
    totalExpense = data.reduce((total, expense) => total + expense.amount, 0);
  } catch {
    setToastMessage(
      "Something went wrong. Please contact to application administrator."
    );
    setToast();
  }

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
              icon={expense.categoryId[0].icon}
              color={expense.categoryId[0].color}
            />
          </ExpenseRow>
        </div>
      ))}
    </ExpenseContainer>
  );
}

export default ExpenseList;
