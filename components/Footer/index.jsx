import { useRouter } from "next/router";
import { StyledFooter } from "./Footer.styled";
import CreateButton from "../CreateButton";
import GoBackButton from "../GoBackButton";

function Footer() {
  const { route } = useRouter();

  return (
    <StyledFooter>
      {route === "/" ? <CreateButton /> : <GoBackButton />}
    </StyledFooter>
  );
}

export default Footer;
