import useSWR from "swr";
import Loading from "../Loading";
import { StyledList } from "@/design-system/StyledList";
import { StyledCard } from "@/design-system/StyledCard";
import { StyledContainer } from "@/design-system/StyledContainer";
import { StyledSummaryBox } from "@/design-system/StyledSummaryBox";
import ListItem from "../ListItem";
import { StyledText } from "@/design-system/StyledText";
import { StyledLink } from "@/design-system/StyledLink";

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
        <StyledText>Total</StyledText>
        <StyledText $isSummaryNumber>-{totalExpense}€</StyledText>
      </StyledSummaryBox>
      {data.map((expense, index) => (
        <StyledList key={index}>
          <StyledCard>
            <StyledLink href={`expense/${expense._id}`}>
              <ListItem
                id={expense._id}
                name={expense.name}
                amount={expense.amount}
              />
            </StyledLink>
          </StyledCard>
        </StyledList>
      ))}
    </StyledContainer>
  );
}

export default ExpenseList;
