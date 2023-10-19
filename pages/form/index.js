import ExpenseForm from "@/components/ExpenseForm";
import Router from "next/router";
import React from "react";
import styled from "styled-components";
import useSWR from "swr";
import Link from "next/link";

function Form() {
  const { data, error, mutate } = useSWR(`/api/categories`);
  const category = data;

  if (!data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <h1> Error:{error.message} </h1>;
  }

  const handleSubmit = async (event) => {
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

    mutate();
    event.target.reset();

    Router.push("/");
  };

  return (
    <ExpenseForm
      onSubmit={handleSubmit}
      isEditMode={true}
      category={category}
    />
  );
}

export default Form;
