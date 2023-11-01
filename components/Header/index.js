import Image from "next/image";
import { StyledLink } from "../../design-system/StyledExpenseList";
import { StyledHeader } from "../../design-system/StyledHeader";
import { StyledContainer } from "../../design-system/StyledHeader";
import { Title } from "../../design-system/StyledHeader";

function Header() {
  return (
    <StyledHeader>
      <StyledContainer>
        <Image src="./smartsaver.svg" width="75" height="75" alt="Logo" />
        <Title>SmartSaver</Title>
      </StyledContainer>
    </StyledHeader>
  );
}

export default Header;
