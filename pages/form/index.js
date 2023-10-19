import ExpenseForm from "@/components/ExpenseForm";
import Router from "next/router";
import React from "react";
import useSWR from "swr";

function Form() {
  // const { data, error, mutate } = useSWR(`/api/categories`);

  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <h1> Error:{error.message} </h1>;
  // }

  const handleAdd = async (event) => {
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
      return;
    }

    //mutate();
    event.target.reset();

    Router.push("/");
  };

  return <ExpenseForm onSubmit={handleAdd} isEditMode={false} />;
}

export default Form;
