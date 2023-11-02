import useSWR from "swr";
import Loading from "../Loading";
import { StyledList } from "@/design-system/StyledList";
import { StyledCard } from "@/design-system/StyledCard";
import { StyledContainer } from "@/design-system/StyledContainer";
import { StyledSummaryBox } from "@/design-system/StyledSummaryBox";
import { StyledSummaryText } from "@/design-system/StyledSummaryText";
import { StyledSummaryNumber } from "@/design-system/StyledSummaryNumber";
import ListItem from "../ListItem";

function ExpenseList() {
  const { data, error } = useSWR(`/api/expenses`);

  if (!data) {
    return <Loading />;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  const totalExpense = data.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <StyledContainer>
      <StyledSummaryBox>
        <StyledSummaryText>Total</StyledSummaryText>
        <StyledSummaryNumber>-{totalExpense}€</StyledSummaryNumber>
      </StyledSummaryBox>
      {data.map((expense, index) => (
        <StyledList key={index}>
          <StyledCard>
            <ListItem
              id={expense._id}
              name={expense.name}
              amount={expense.amount}
            />
          </StyledCard>
        </StyledList>
      ))}
    </StyledContainer>
  );
}

export default ExpenseList;
