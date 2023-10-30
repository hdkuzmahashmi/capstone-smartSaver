import ExpenseForm from "@/components/ExpenseForm";
import { useRouter } from "next/router";
import Router from "next/router";
import { mutate } from "swr";
import useSWR from "swr";

function FormPage({ setToast, setToastMessage }) {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/expenses/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  async function handleEdit(event) {
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
      setToastMessage("Expense is updated successfully!");
      setToast();
    }
  }
  return <ExpenseForm onSubmit={handleEdit} isEditMode={true} expense={data} />;
}

export default FormPage;
