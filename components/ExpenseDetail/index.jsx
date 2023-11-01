import DeleteButton from "../DeleteButton";
import { StyledBoldText } from "@/design-system/StyledBoldText";
import { StyledLink } from "@/design-system/StyledLink";
import { StyledGrid } from "@/design-system/StyledGrid";
import { StyledGridItem } from "@/design-system/StyledGridItem";
import { Icon } from "@iconify/react";
import { StyledCard } from "@/design-system/StyledCard";
import { StyledIconButton } from "@/design-system/StyledIconButton";
import { StyledIconGroup } from "@/design-system/StyledIconGroup";

function ExpenseDetail({ expense = [], handleDelete }) {
  return (
    <StyledCard $addMarginBottom>
      <StyledGrid>
        <StyledBoldText>Name</StyledBoldText>{" "}
        <StyledGridItem>{expense.name}</StyledGridItem>
        <StyledBoldText>Description</StyledBoldText>{" "}
        <StyledGridItem> {expense.description}</StyledGridItem>
        <StyledBoldText>Category</StyledBoldText>{" "}
        <StyledGridItem> {expense.categoryId[0].name}</StyledGridItem>
        <StyledBoldText>Amount</StyledBoldText>{" "}
        <StyledGridItem> {expense.amount} €</StyledGridItem>
      </StyledGrid>
      <StyledIconGroup>
        <StyledLink href={`/create/${expense._id}`}>
          <StyledIconButton>
            <Icon icon="icon-park-outline:edit" width="24" />
          </StyledIconButton>
        </StyledLink>
        <DeleteButton
          expenseId={expense._id}
          handleDelete={handleDelete}
          showList={true}
        ></DeleteButton>
      </StyledIconGroup>
    </StyledCard>
  );
}

export default ExpenseDetail;
