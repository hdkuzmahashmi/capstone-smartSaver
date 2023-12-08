import Form from "@/components/Form";
import Router from "next/router";
import React from "react";
import { mutate } from "swr";

function CreatePage({ setToast }) {
  const handleAdd = async (event) => {
    try {
      event.preventDefault();

      const formdata = new FormData(event.target);
      const expData = Object.fromEntries(formdata);

      const response = await fetch("/api/expenses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(expData),
      });

      if (!response.ok) {
        console.error(response.status);
        setToast(
          true,
          "Something went wrong, API does not response data. Please contact to application administrator.",
          "warning"
        );
        return;
      }

      event.target.reset();
      mutate("/api/expenses");
      Router.push("/details");
      setToast(true, "Expense is added successfully!", "success");
    } catch {
      setToast(
        true,
        "Something went wrong. Please contact to application administrator.",
        "error"
      );
    }
  };

  return <Form onSubmit={handleAdd} isEditMode={false} setToast={setToast} />;
}

export default CreatePage;
