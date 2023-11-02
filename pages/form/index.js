import ExpenseForm from "@/components/ExpenseForm";
import Router from "next/router";
import React from "react";
import { mutate } from "swr";

function Form({ setToast, setToastMessage }) {
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
        setToastMessage(
          "Something went wrong. Please contact to application administrator.",
          "error"
        );
        setToast();
        return;
      }

      event.target.reset();

      mutate("/api/expenses");
      Router.push("/");
      setToastMessage("Expense is added successfully!", "success");
      setToast();
    } catch {
      setToastMessage(
        "Something went wrong. Please contact to application administrator.",
        "error"
      );
      setToast();
    }
  };

  return <ExpenseForm onSubmit={handleAdd} isEditMode={false} />;
}

export default Form;
