import Image from "next/image";
import { StyledHeadline } from "@/design-system/StyledHeadline";
import { StyledContainer } from "@/design-system/StyledContainer";
import { StyledLink } from "@/design-system/StyledLink";
import { signIn, signOut, useSession } from "next-auth/react";
import { StyledButton } from "@/design-system/StyledButton";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import Loading from "../Loading";
import CookieBanner from "../CookieBanner";

function Header() {
  const { data: session, status } = useSession();

  const userEmail = session?.user?.email;
  const userAvatar = session?.user?.image;

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <>
      <StyledContainer $isCenter>
        <StyledLink href="/">
          <StyledContainer $isLogo>
            <Image src="/smartsaver.svg" width="75" height="75" alt="Logo" />
            <StyledHeadline>SmartSaver</StyledHeadline>
          </StyledContainer>
        </StyledLink>
      </StyledContainer>
      <StyledContainer $isCenter>
        {status === "authenticated" && (
          <StyledContainer $isCenter>
            <StyledAvatar src={userAvatar} alt="Avatar" />
            {userEmail}
            <StyledButton onClick={signOut} $isLoginButton>
              Logout
              <Icon icon="material-symbols:login" color="#1c91e3" width="32" />
            </StyledButton>
          </StyledContainer>
        )}
        {status === "unauthenticated" && (
          <StyledButton onClick={signIn} $isLoginButton>
            Login
            <Icon icon="material-symbols:login" color="#1c91e3" width="32" />
          </StyledButton>
        )}
      </StyledContainer>
      <CookieBanner />
    </>
  );
}
const StyledAvatar = styled.img`
  border-radius: 50%;
  width: 38px;
  height: 38px;
`;

export default Header;
