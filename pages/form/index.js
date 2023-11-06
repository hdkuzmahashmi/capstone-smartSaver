import ExpenseForm from "@/components/ExpenseForm";
import Router from "next/router";
import React from "react";
import { mutate } from "swr";

function Form({ setToast }) {
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
        setToast(
          true,
          "Something went wrong, API does not response data. Please contact to application administrator.",
          "info"
        );
        console.error(response.status);

        return;
      }

      event.target.reset();

      mutate("/api/expenses");
      Router.push("/");

      setToast(true, "Expense is added successfully!", "success");
    } catch {
      setToast(
        true,
        "Something went wrong. Please contact to application administrator.",
        "error"
      );
    }
  };

  return <ExpenseForm onSubmit={handleAdd} isEditMode={false} />;
}

export default Form;
