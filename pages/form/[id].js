import ExpenseForm from "@/components/ExpenseForm";
import { useRouter } from "next/router";
import Router from "next/router";
import { mutate } from "swr";
import useSWR from "swr";

function FormPage({ setToast, setToastMessage }) {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(`/api/expenses/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    setToastMessage(
      "Something went wrong. Please contact to application administrator.",
      "error"
    );
    setToast();
  }

  if (!data) {
    setToastMessage(
      "Something went wrong, API does not response data. Please contact to application administrator.",
      "warning"
    );
    setToast();
    return;
  }

  async function handleEdit(event) {
    try {
      event.preventDefault();

      const formData = new FormData(event.target);
      const expData = Object.fromEntries(formData);
      const response = await fetch(`/api/expenses/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(expData),
      });
      if (response.ok) {
        mutate(`/api/expenses/${id}`);
        Router.push("/");
        setToastMessage("Expense is updated successfully!", "success");
        setToast();
      }
    } catch {
      setToastMessage(
        "Something went wrong. Please contact to application administrator.",
        "error"
      );
      setToast();
    }
  }
  return <ExpenseForm onSubmit={handleEdit} isEditMode={true} expense={data} />;
}

export default FormPage;
