import React from "react";
import { StyledContainer } from "@/design-system/StyledContainer";
import { StyledExpenseTitle } from "@/design-system/StyledExpenseTitle";
import { StyledLink } from "@/design-system/StyledLink";
import { StyledText } from "@/design-system/StyledText";

function ListItem({ name, amount, id }) {
  return (
    <StyledContainer $isSpaceBetween>
      <StyledExpenseTitle>{name}</StyledExpenseTitle>
      <StyledText $isBold>{amount} €</StyledText>
    </StyledContainer>
  );
}

export default ListItem;
