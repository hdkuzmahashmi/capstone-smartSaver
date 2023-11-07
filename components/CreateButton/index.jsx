import { Icon } from "@iconify/react";
import { StyledFloatingButton } from "../../design-system/StyledFloatingButton";

function CreateButton() {
  return (
    <StyledFloatingButton href="/create">
      <Icon icon="ic:round-add" width={32} aria-label="Add new expense" />
    </StyledFloatingButton>
  );
}

export default CreateButton;
