import { useState } from "react";
import { mutate } from "swr";
import { Backdrop } from "./DeleteButton.styled";
import { Modal } from "./DeleteButton.styled";
import { FlexDiv } from "./DeleteButton.styled";
import { ModalButton } from "./DeleteButton.styled";
import { useRef } from "react";

export default function DeleteButton({ expenseId }) {
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
  }

  return (
    <>
      <button type="button" onClick={handleModal}>
        X
      </button>
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
