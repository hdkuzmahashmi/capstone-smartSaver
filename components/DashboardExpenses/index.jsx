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
            <StyledExpenseSquare $bgcolor={expense.categoryId[0]?.color}>
              <StyledBackgroundIcon
                icon={expense.categoryId[0]?.icon}
                width="30"
                $bgcolor={expense.categoryId[0]?.color}
              />
              <p>{expense.amount}€</p>
              <span>{expense.name.split(" ")[0]}</span>
            </StyledExpenseSquare>
          </StyledLink>
        ))}
      </StyledContainer>
    </StyledList>
  );
}

export default DashboardExpenses;
