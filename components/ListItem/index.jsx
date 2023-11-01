import React from "react";
import { StyledBetweenContainer } from "@/design-system/StyledBetweenContainer";
import { StyledExpenseTitle } from "@/design-system/StyledExpenseTitle";
import { StyledBoldText } from "@/design-system/StyledBoldText";
import { StyledLink } from "@/design-system/StyledLink";

function ListItem({ name, amount, id }) {
  return (
    <StyledLink href={`expense/${id}`}>
      <StyledBetweenContainer>
        <StyledExpenseTitle>{name}</StyledExpenseTitle>
        <StyledBoldText>{amount} €</StyledBoldText>
      </StyledBetweenContainer>
    </StyledLink>
  );
}

export default ListItem;
