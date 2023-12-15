import Image from "next/image";
import { StyledHeadline } from "@/design-system/StyledHeadline";
import { LoginText, StyledContainer } from "@/design-system/StyledContainer";
import { StyledLink } from "@/design-system/StyledLink";
import { signIn, signOut, useSession } from "next-auth/react";
import { StyledButton } from "@/design-system/StyledButton";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import Loading from "../Loading";
import CookieBanner from "../CookieBanner";

function Header() {
  const { data: session, status } = useSession();

  const userName = session?.user?.name
    ? session?.user?.name
    : session?.user?.email?.split("@")[0];
  const userAvatar = session?.user?.image;

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <>
      <StyledContainer $isHeader>
        <StyledLink href="/">
          <StyledContainer $isLogo>
            <Image src="/smartsaver.svg" width="65" height="65" alt="Logo" />
            <StyledHeadline>SmartSaver</StyledHeadline>
          </StyledContainer>
        </StyledLink>
        {status === "authenticated" && (
          <StyledButton onClick={signOut} $isLoginButton>
            <Icon icon="material-symbols:login" color="#1c91e3" width="32" />
          </StyledButton>
        )}
        {status === "unauthenticated" && (
          <StyledButton onClick={signIn} $isLoginButton>
            <Icon icon="material-symbols:login" color="#1c91e3" width="32" />
          </StyledButton>
        )}
      </StyledContainer>
      {userName && (
        <LoginText>
          {userAvatar ? (
            <StyledAvatar src={userAvatar} alt="User Avatar" />
          ) : (
            <StyledAvatar src="/defaultAvatar.png" alt="User Avatar" />
          )}
          {userName}
        </LoginText>
      )}
      <CookieBanner />
    </>
  );
}
const StyledAvatar = styled.img`
  border-radius: 50%;
  width: 42px;
  height: 42px;
`;

export default Header;
