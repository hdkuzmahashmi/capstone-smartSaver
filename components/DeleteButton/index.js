import { useState } from "react";
import { mutate } from "swr";
import { Backdrop } from "../../design-system/StyledDeleteButton";
import { Modal } from "../../design-system/StyledDeleteButton";
import { FlexDiv } from "../../design-system/StyledDeleteButton";
import { ModalButton } from "../../design-system/StyledDeleteButton";
import { useRef } from "react";
import { Icon } from "@iconify/react";
import Router from "next/router";
import { StyledButton } from "../../design-system/StyledDeleteButton";

function DeleteButton({ expenseId, showList }) {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  function handleOuterClick(event) {
    if (event.target === modalRef.current) {
      return;
    }
    hideModal();
  }

  function handleModal() {
    setShowModal(!showModal);
    document.body.style.overflow = "hidden";
  }

  function hideModal() {
    setShowModal(false);
    document.body.style.overflow = "auto";
  }

  async function handleDelete(expenseId) {
    const response = await fetch(`/api/expenses/${expenseId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      mutate(`/api/expenses`);
    }
    hideModal();
    if (showList) Router.push("/");
  }

  return (
    <>
      {showList ? (
        <StyledButton onClick={handleModal}>
          <Icon icon="icon-park-outline:delete" width="24" />
        </StyledButton>
      ) : (
        <Icon
          type="button"
          onClick={handleModal}
          icon="mi:delete"
          width="24"
          height="24"
        />
      )}
      {showModal && (
        <Backdrop onClick={handleOuterClick}>
          <Modal ref={modalRef}>
            <p>Are you sure?</p>
            <FlexDiv>
              <ModalButton
                type="button"
                onClick={() => handleDelete(expenseId)}
                $isConfirm
              >
                Delete
              </ModalButton>
              <ModalButton type="button" onClick={hideModal}>
                Cancel
              </ModalButton>
            </FlexDiv>
          </Modal>
        </Backdrop>
      )}
    </>
  );
}

export default DeleteButton;
