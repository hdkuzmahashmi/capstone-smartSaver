import { useRouter } from "next/router";
import { StyledActionButton } from "../../design-system/StyledActionButton";
import { Icon } from "@iconify/react";

function GoBackButton() {
  const router = useRouter();

  return (
    <StyledActionButton as="button" onClick={() => router.back()}>
      <Icon icon="ic:sharp-arrow-back" width={32} aria-label="Go back" />
    </StyledActionButton>
  );
}

export default GoBackButton;
