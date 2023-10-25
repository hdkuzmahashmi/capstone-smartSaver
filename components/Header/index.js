import Image from "next/image";
import { StyledLink } from "../ExpenseList/ExpenseList.styled";
import { StyledHeader } from "./Header.styled";
import { StyledContainer } from "./Header.styled";
import { Title } from "./Header.styled";

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
