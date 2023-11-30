import styled from "styled-components";
import {
  StyledHeading,
  StyledHistoryIcon,
  StyledViewLink,
  StyledContainer,
  FlexContainer,
  StyledView,
} from "@/design-system/StyledViewAllExpenses";

function ViewAllExpenses() {
  return (
    <FlexContainer>
      <StyledViewLink href="/details">
        <StyledContainer>
          <StyledHistoryIcon icon="material-symbols:history" width="32" />
          <StyledView>View All Expenses</StyledView>
        </StyledContainer>
      </StyledViewLink>
    </FlexContainer>
  );
}

export default ViewAllExpenses;
