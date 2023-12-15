import { useRouter } from "next/router";
import { StyledFooter } from "@/design-system/StyledFooter";
import { StyledLink } from "@/design-system/StyledLink";
import { StyledContainer } from "@/design-system/StyledContainer";
import CreateButton from "../CreateButton";
import GoBackButton from "../GoBackButton";

function Footer() {
  const { route } = useRouter();

  return (
    <>
      <StyledContainer $isPolicyContainer>
        <StyledLink href="/policy#privacy-policy">Privacy Policy</StyledLink>
        {" | "}
        <StyledLink href="/policy#terms-and-conditions">
          Terms of Service
        </StyledLink>
      </StyledContainer>
      <StyledFooter>
        {route === "/" || route === "/details" ? (
          <CreateButton />
        ) : (
          <GoBackButton />
        )}
      </StyledFooter>
    </>
  );
}

export default Footer;
