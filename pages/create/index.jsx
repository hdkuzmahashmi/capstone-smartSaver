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
      console.log("expData:", expData);

      // Send the expense data to your expenses API
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
          "Something went wrong, API does not respond with data. Please contact the application administrator.",
          "warning"
        );
        return;
      }

      // Upload image to Cloudinary
      try {
        const cloudinaryResponse = await fetch("/api/upload", {
          method: "POST",
          body: formdata,
        });

        if (!cloudinaryResponse.ok) {
          console.error(cloudinaryResponse.status);
          setToast(
            true,
            "Error uploading image to Cloudinary. Please try again.",
            "warning"
          );
          return;
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        setToast(
          true,
          "Error uploading image to Cloudinary. Please try again.",
          "warning"
        );
        return;
      }

      // Reset form, trigger re-fetch, and navigate
      event.target.reset();
      mutate("/api/expenses");
      Router.push("/details");
      setToast(true, "Expense added successfully!", "success");
    } catch (error) {
      console.error("General error:", error);
      setToast(
        true,
        "Something went wrong. Please contact the application administrator.",
        "error"
      );
    }
  };

  return <Form onSubmit={handleAdd} isEditMode={false} setToast={setToast} />;
}

export default CreatePage;
