import { Icon } from "@iconify/react";
import { StyledActionButton } from "./ActionButton.styled";
import { useRouter } from "next/router";

function ActionButton() {
  const router = useRouter();
  const route = useRouter().route;

  if (route === "/") {
    return (
      <StyledActionButton href="/form">
        <Icon icon="ic:round-add" width={32} aria-label="Add new expense" />
      </StyledActionButton>
    );
  }

  return (
    <StyledActionButton as="button" onClick={() => router.back()}>
      <Icon icon="ic:sharp-arrow-back" width={32} aria-label="Go back" />
    </StyledActionButton>
  );
}

export default ActionButton;
