import { useRouter } from "next/router";
import { StyledFooter } from "../../design-system/StyledFooter";
import CreateButton from "../CreateButton";
import GoBackButton from "../GoBackButton";

function Footer() {
  const { route } = useRouter();

  return (
    <StyledFooter>
      {route === "/" || route === "/graph" ? (
        <CreateButton />
      ) : (
        <GoBackButton />
      )}
    </StyledFooter>
  );
}

export default Footer;
