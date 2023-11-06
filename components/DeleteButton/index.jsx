import { mutate } from "swr";
import Router from "next/router";
import ConfirmModal from "../ConfirmModal";

function DeleteButton({ expenseId, showList, expenseName }) {
  async function handleDelete(expenseId) {
    const response = await fetch(`/api/expenses/${expenseId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      mutate(`/api/expenses`);
    }
    if (showList) Router.push("/");
  }

  return (
    <ConfirmModal
      message={`Are you sure you want to delete your expense '${expenseName}'?`}
      handleFunction={handleDelete}
      expenseId={expenseId}
      iconName="mi:delete"
    />
  );
}

export default DeleteButton;
