import {
  StyledBackgroundIcon,
  StyledExpenseSquare,
} from "@/design-system/StyledExpenseSquare";
import { StyledList } from "@/design-system/StyledList";
import { StyledContainer } from "@/design-system/StyledContainer";
import { StyledLink } from "@/design-system/StyledLink";
import {
  StyledHistoryIcon,
  StyledViewLink,
  StyledViewLinkNew,
} from "@/design-system/StyledViewAllExpenses";

// const handleMouseEnter = () => {
//   setIsHovered(true);
// };

// const handleMouseLeave = () => {
//   setIsHovered(false);
// };

const handleClick = () => {
  window.location.href = "/details";
};

function DashboardExpenses({ expenses }) {
  return (
    <StyledList>
      <StyledContainer $isDashboard $isCenter>
        {expenses.map((expense) => (
          <StyledLink key={expense._id} href={`/expense/${expense._id}`}>
            <StyledExpenseSquare $bgcolor={expense.categoryId[0]?.color}>
              <StyledBackgroundIcon
                icon={expense.categoryId[0]?.icon}
                $bgcolor={expense.categoryId[0]?.color}
                width={28}
              />

              <p>{expense.amount}€</p>
              <span>{expense.name.split(" ")[0]}</span>
            </StyledExpenseSquare>
          </StyledLink>
        ))}
        <StyledViewLinkNew href="#" onClick={handleClick}>
          <StyledHistoryIcon
            icon="icon-park-outline:history-query"
            color="black"
            width="28"
          />
          <span>All Expenses</span>
        </StyledViewLinkNew>
      </StyledContainer>
    </StyledList>
  );
}

export default DashboardExpenses;
