import { useState } from "react";
import { mutate } from "swr";
import { Backdrop } from "./DeleteButton.styled";
import { Modal } from "./DeleteButton.styled";
import { FlexDiv } from "./DeleteButton.styled";
import { ModalButton } from "./DeleteButton.styled";
import { useRef } from "react";
import { Icon } from "@iconify/react";
import Router from "next/router";
import { StyledButton } from "./DeleteButton.styled";

export default function DeleteButton({ expenseId, showList, setToast }) {
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
    try {
      const response = await fetch(`/api/expenses/${expenseId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        mutate(`/api/expenses`);
        setToast(true, "Expense is deleted successfully!", "success");
      }
      hideModal();
      if (showList) Router.push("/");
    } catch {
      setToast(
        true,
        "Something went wrong. Please contact to application administrator.",
        "error"
      );
    }
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
