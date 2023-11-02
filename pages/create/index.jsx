import Form from "@/components/Form";
import Router from "next/router";
import React from "react";
import { mutate } from "swr";

function CreatePage() {
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

    event.target.reset();
    mutate("/api/expenses");
    Router.push("/");
  };

  return <Form onSubmit={handleAdd} isEditMode={false} />;
}

export default CreatePage;
