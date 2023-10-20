import { useState } from "react";
import { mutate } from "swr";
import { Backdrop } from "./DeleteButton.styled";
import { Modal } from "./DeleteButton.styled";
import { ConfirmButton } from "./DeleteButton.styled";
import { CancelButton } from "./DeleteButton.styled";
import { FlexDiv } from "./DeleteButton.styled";

export default function DeleteButton({ expenseId }) {
  const [showModal, setShowModal] = useState(false);

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
        <Backdrop>
          <Modal>
            <p>Are you sure?</p>
            <FlexDiv>
              <ConfirmButton
                type="button"
                onClick={() => handleDelete(expenseId)}
              >
                Delete
              </ConfirmButton>
              <CancelButton type="button" onClick={hideModal}>
                Cancel
              </CancelButton>
            </FlexDiv>
          </Modal>
        </Backdrop>
      )}
    </>
  );
}
