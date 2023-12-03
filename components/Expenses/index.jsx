import { StyledList } from "@/design-system/StyledList";
import { StyledCard } from "@/design-system/StyledCard";
import { StyledLink } from "@/design-system/StyledLink";
import ListItem from "../ListItem";

function Expenses({ expenses }) {
  return (
    <StyledList>
      {expenses.map((expense) => (
        <StyledCard $color={expense.categoryId[0]?.color} key={expense._id}>
          <StyledLink href={`expense/${expense._id}`}>
            <ListItem
              id={expense._id}
              name={expense.name}
              amount={expense.amount}
              icon={expense.categoryId[0]?.icon}
              date={expense.createdAt}
            />
          </StyledLink>
        </StyledCard>
      ))}
    </StyledList>
  );
}

export default Expenses;
