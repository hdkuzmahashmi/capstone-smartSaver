import { useState } from "react";
import { StyledBackdrop } from "@/design-system/StyledBackdrop";
import { Icon } from "@iconify/react";
import { StyledButton } from "@/design-system/StyledButton";
import { StyledModal } from "@/design-system/StyledModal";
import { StyledIconButton } from "@/design-system/StyledIconButton";
import { StyledContainer } from "@/design-system/StyledContainer";

function ConfirmModal({ message, handleFunction, iconName, expenseId }) {
  const [showModal, setShowModal] = useState(false);

  function handleOuterClick(event) {
    if (event.target === event.currentTarget) {
      hideModal();
    }
  }

  function handleModal() {
    setShowModal(!showModal);
    document.body.style.overflow = "hidden";
  }

  function hideModal() {
    setShowModal(false);
    document.body.style.overflow = "auto";
  }

  return (
    <>
      <StyledIconButton>
        <Icon
          type="button"
          onClick={handleModal}
          icon={iconName}
          width="24"
          height="24"
        />
      </StyledIconButton>
      {showModal && (
        <StyledBackdrop onClick={handleOuterClick}>
          <StyledModal>
            <p>{message}</p>
            <StyledContainer $isCenter>
              <StyledButton
                type="button"
                onClick={() => handleFunction(expenseId)}
                $isDeleteButton
              >
                Confirm
              </StyledButton>
              <StyledButton type="button" onClick={hideModal}>
                Cancel
              </StyledButton>
            </StyledContainer>
          </StyledModal>
        </StyledBackdrop>
      )}
    </>
  );
}

export default ConfirmModal;
