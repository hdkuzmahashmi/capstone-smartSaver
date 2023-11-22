import Image from "next/image";
import { StyledHeadline } from "@/design-system/StyledHeadline";
import { StyledContainer } from "@/design-system/StyledContainer";
import { StyledLink } from "@/design-system/StyledLink";

function Header() {
  return (
    <StyledLink href="/">
      <StyledContainer $isFlexRow>
        <Image src="/smartsaver.svg" width="75" height="75" alt="Logo" />
        <StyledHeadline>SmartSaver</StyledHeadline>
      </StyledContainer>
    </StyledLink>
  );
}

export default Header;
