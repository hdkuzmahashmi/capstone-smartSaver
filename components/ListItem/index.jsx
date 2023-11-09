import React from "react";
import { StyledContainer } from "@/design-system/StyledContainer";
import { StyledExpenseTitle } from "@/design-system/StyledExpenseTitle";
import { StyledLink } from "@/design-system/StyledLink";
import { StyledText } from "@/design-system/StyledText";
import { Icon } from "@iconify/react";
function ListItem({ name, amount, id, icon }) {
  return (
    <StyledContainer $isSpaceBetween>
      <Icon icon={icon} width={20} />
      <StyledExpenseTitle>{name}</StyledExpenseTitle>
      <StyledText $isBold>{amount} €</StyledText>
    </StyledContainer>
  );
}

export default ListItem;
