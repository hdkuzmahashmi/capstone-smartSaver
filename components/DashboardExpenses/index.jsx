import {
  StyledBackgroundIcon,
  StyledExpenseSquare,
} from "@/design-system/StyledExpenseSquare";
import { StyledList } from "@/design-system/StyledList";
import { StyledContainer } from "@/design-system/StyledContainer";
import { StyledLink } from "@/design-system/StyledLink";

function DashboardExpenses({ expenses }) {
  return (
    <StyledList>
      <StyledContainer $isDashboard $isCenter>
        {expenses.map((expense) => (
          <StyledLink key={expense._id} href={`/expense/${expense._id}`}>
            <StyledExpenseSquare color={expense.categoryId[0]?.color}>
              <StyledBackgroundIcon
                icon={expense.categoryId[0]?.icon}
                width="72"
              />
              <h3>{expense.amount}€</h3>
              <p>{expense.name.split(" ")[0]}</p>
            </StyledExpenseSquare>
          </StyledLink>
        ))}
      </StyledContainer>
    </StyledList>
  );
}

export default DashboardExpenses;
