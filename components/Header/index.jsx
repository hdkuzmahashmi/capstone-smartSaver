import Image from "next/image";
import { StyledHeadline } from "@/design-system/StyledHeadline";
import { StyledContainer } from "@/design-system/StyledContainer";
import { StyledLink } from "@/design-system/StyledLink";
import { signIn, signOut, useSession } from "next-auth/react";
import { StyledButton } from "@/design-system/StyledButton";
import { StyledIcon } from "@/design-system/StyledIcon";
import { Icon } from "@iconify/react";
import Loading from "../Loading";

function Header() {
  const { data: session, status } = useSession();

  const userEmail = session?.user?.email;

  if (status === "loading") {
    return <Loading />;
  }

  async function fetchTest() {
    if (session === null) return;
    const result = await fetch("/api/user");
    console.log(result);
  }

  fetchTest();

  return (
    <>
      <StyledContainer $isSpaceBetween>
        <StyledLink href="/">
          <StyledContainer $isLogo>
            <Image src="/smartsaver.svg" width="75" height="75" alt="Logo" />
            <StyledHeadline>SmartSaver</StyledHeadline>
          </StyledContainer>
        </StyledLink>
        <StyledContainer $isLogin>
          {status === "authenticated" ? userEmail : ""}
          <StyledButton
            onClick={
              status === "authenticated" ? () => signOut() : () => signIn()
            }
            $isLoginButton
          >
            {status === "authenticated" ? "Logout" : "Login"}
            <Icon icon="material-symbols:login" color="#1c91e3" width="32" />
          </StyledButton>
        </StyledContainer>
      </StyledContainer>
    </>
  );
}

export default Header;
