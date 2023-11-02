import React from "react";
import { StyledContainer } from "@/design-system/StyledContainer";
import { StyledExpenseTitle } from "@/design-system/StyledExpenseTitle";
import { StyledBoldText } from "@/design-system/StyledBoldText";
import { StyledLink } from "@/design-system/StyledLink";

function ListItem({ name, amount, id }) {
  return (
    <StyledLink href={`expense/${id}`}>
      <StyledContainer $isSpaceBetween>
        <StyledExpenseTitle>{name}</StyledExpenseTitle>
        <StyledBoldText>{amount} €</StyledBoldText>
      </StyledContainer>
    </StyledLink>
  );
}

export default ListItem;
