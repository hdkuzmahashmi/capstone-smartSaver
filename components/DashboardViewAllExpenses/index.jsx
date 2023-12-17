import { useState } from "react";
import {
  StyledHistoryIcon,
  StyledViewLink,
  StyledContainer,
  FlexContainer,
  StyledView,
  StyledViewLinkNew,
} from "@/design-system/StyledViewAllExpenses";

function ViewAllExpenses() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    window.location.href = "/details";
  };

  return (
    <FlexContainer>
      {/* <StyledViewLinkNew
        href="#"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <StyledContainer>
          <StyledHistoryIcon
            icon="icon-park-outline:history-query"
            color="white"
            width="28"
          />
          {isHovered && <StyledView>View All Expenses</StyledView>}
        </StyledContainer>
      </StyledViewLinkNew> */}
    </FlexContainer>
  );
}

export default ViewAllExpenses;
