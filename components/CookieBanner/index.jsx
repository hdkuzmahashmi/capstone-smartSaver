import { StyledBanner } from "@/design-system/StyledBanner";
import { StyledCookieButton } from "@/design-system/StyledCookieButton";
import useLocalStorageState from "use-local-storage-state";

function CookieBanner() {
  const [isCookieBannerVisible, setIsCookieBannerVisible, { removeItem }] =
    useLocalStorageState("isCookieBannerVisible", { defaultValue: true });

  if (!isCookieBannerVisible) {
    return null;
  }

  return (
    <StyledBanner>
      <p>
        SmartSaver utilizes cookies 🍪 to enhance user experience and optimize
        functionality
      </p>
      <StyledCookieButton onClick={() => setIsCookieBannerVisible(false)}>
        I understand
      </StyledCookieButton>
    </StyledBanner>
  );
}

export default CookieBanner;
