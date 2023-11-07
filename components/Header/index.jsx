import Image from "next/image";
import { StyledHeadline } from "@/design-system/StyledHeadline";
import { StyledContainer } from "@/design-system/StyledContainer";

function Header() {
  return (
    <StyledContainer $isFlexRow>
      <Image src="/smartsaver.svg" width="75" height="75" alt="Logo" />
      <StyledHeadline>SmartSaver</StyledHeadline>
    </StyledContainer>
  );
}

export default Header;
