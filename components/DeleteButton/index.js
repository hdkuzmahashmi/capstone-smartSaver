import { useState } from "react";

export default function DeleteButton({ expenseId, handleDelete }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        X
      </button>
      {showModal && (
        <article>
          <p>Bist du dir sicher?</p>
          <button type="button" onClick={() => handleDelete(expenseId)}>
            yes
          </button>
          <button type="button" onClick={() => setShowModal(false)}>
            no
          </button>
        </article>
      )}
    </>
  );
}
