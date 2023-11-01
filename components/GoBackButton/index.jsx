import { useRouter } from "next/router";
import { StyledFloatingButton } from "../../design-system/StyledFloatingButton";
import { Icon } from "@iconify/react";

function GoBackButton() {
  const router = useRouter();

  return (
    <StyledFloatingButton as="button" onClick={() => router.back()}>
      <Icon icon="ic:sharp-arrow-back" width={32} aria-label="Go back" />
    </StyledFloatingButton>
  );
}

export default GoBackButton;
