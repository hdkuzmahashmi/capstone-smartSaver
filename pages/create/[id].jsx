import Form from "@/components/Form";
import { useRouter } from "next/router";
import Router from "next/router";
import { mutate } from "swr";
import useSWR from "swr";

function EditPage({ setToast }) {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error } = useSWR(`/api/expenses/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    setToast(
      true,
      "Something went wrong, API does not response data. Please contact to application administrator.",
      "error"
    );
    return;
  }
  if (!data) {
    setToast(
      true,
      "Something went wrong, API does not response data. Please contact to application administrator.",
      "warning"
    );
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
        setToast(true, "Expense is updated successfully!", "success");
      }
    } catch {
      setToast(
        true,
        "Something went wrong. Please contact to application administrator.",
        "error"
      );
    }
  }

  return <Form onSubmit={handleEdit} isEditMode={true} expense={data} />;
}

export default EditPage;
