import useSWR from "swr";
import Loading from "../Loading";
import { StyledList } from "@/design-system/StyledList";
import { StyledCard } from "@/design-system/StyledCard";
import { StyledContainer } from "@/design-system/StyledContainer";
import { StyledSummaryBox } from "@/design-system/StyledSummaryBox";
import ListItem from "../ListItem";
import { StyledText } from "@/design-system/StyledText";
import { StyledLink } from "@/design-system/StyledLink";

function ExpenseList({ setToast }) {
  const { data, error } = useSWR(`/api/expenses`);

  if (!data) {
    return <Loading />;
  }

  if (error) {
    setToast(
      true,
      "Something went wrong. Please contact to application administrator.",
      "error"
    );
    return;
  }

  const totalExpense = data.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <StyledContainer>
      <StyledSummaryBox>
        <StyledText>Total</StyledText>
        <StyledText $isSummaryNumber>-{totalExpense} €</StyledText>
      </StyledSummaryBox>
      {data.map((expense, index) => (
        <StyledList key={index}>
          <StyledCard $color={expense.categoryId[0].color}>
            <StyledLink href={`expense/${expense._id}`}>
              <ListItem
                id={expense._id}
                name={expense.name}
                amount={expense.amount}
                icon={expense.categoryId[0].icon}
              />
            </StyledLink>
          </StyledCard>
        </StyledList>
      ))}
    </StyledContainer>
  );
}

export default ExpenseList;
