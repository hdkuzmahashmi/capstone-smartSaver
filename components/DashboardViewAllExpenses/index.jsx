import styled from "styled-components";
import {
  StyledHeading,
  StyledHistoryIcon,
  StyledViewLink,
  StyledContainer,
  FlexContainer,
} from "@/design-system/StyledViewAllExpenses";

function ViewAllExpenses() {
  return (
    <FlexContainer>
      <StyledHeading>Last Expenses:</StyledHeading>
      <StyledViewLink href="/details">
        <StyledContainer>
          <StyledHistoryIcon icon="material-symbols:history" width="36" />
          <StyledHeading>View All Expenses</StyledHeading>
        </StyledContainer>
      </StyledViewLink>
    </FlexContainer>
  );
}

export default ViewAllExpenses;
