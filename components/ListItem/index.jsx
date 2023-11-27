import React from "react";
import { StyledContainer } from "@/design-system/StyledContainer";
import { StyledExpenseTitle } from "@/design-system/StyledExpenseTitle";
import { StyledText } from "@/design-system/StyledText";
import { Icon } from "@iconify/react";
import { StyledDate, StyledTextContainer } from "@/design-system/StyledDate";
import { formatDate } from "@/assets/utils/DateUtils";

function ListItem({ name, amount, icon, date }) {
  const formattedDate = formatDate(date);

  return (
    <StyledContainer $isList $isSpaceBetween>
      <Icon icon={icon} width={25} />
      <StyledTextContainer>
        <StyledExpenseTitle>{name}</StyledExpenseTitle>
        {formattedDate && <StyledDate>{formattedDate}</StyledDate>}
      </StyledTextContainer>
      <StyledText $isBold>{amount} €</StyledText>
    </StyledContainer>
  );
}

export default ListItem;
