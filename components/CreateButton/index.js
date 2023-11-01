import { Icon } from "@iconify/react";
import { StyledActionButton } from "../StyledActionButton/ActionButton.styled";

function CreateButton() {
  return (
    <StyledActionButton href="/create">
      <Icon icon="ic:round-add" width={32} aria-label="Add new expense" />
    </StyledActionButton>
  );
}

export default CreateButton;
