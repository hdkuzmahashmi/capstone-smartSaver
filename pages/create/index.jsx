import Form from "@/components/Form";
import Router from "next/router";
import React from "react";
import { mutate } from "swr";

// Constants for API endpoints
const API_EXPENSES = "/api/expenses";
const API_UPLOAD = "/api/upload";

function CreatePage({ setToast }) {
  // Handle the form submission
  const handleAdd = async (event) => {
    try {
      event.preventDefault();

      // Extract form data
      const formdata = new FormData(event.target);

      // Transform form data into a structured object
      const expData = transformFormData(formdata);

      // Call functions to add expense and upload image
      const expid = await addExpense(expData);
      await uploadImage(formdata, expid);

      // Reset form, trigger re-fetch, and navigate
      event.target.reset();
      mutate(API_EXPENSES);
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

  // Function to transform FormData to a structured object
  const transformFormData = (formdata) => {
    const expData = {};
    for (const [key, value] of formdata.entries()) {
      if (expData[key]) {
        // Check if the existing value is iterable
        expData[key] = Array.isArray(expData[key])
          ? [...expData[key], value]
          : [expData[key], value];
      } else {
        // If the key does not exist, set the value
        expData[key] = value;
      }
    }
    return expData;
  };

  // Function to add an expense via API
  const addExpense = async (expData) => {
    const response = await fetch(API_EXPENSES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expData),
    });

    // Handle API response errors
    if (!response.ok) {
      handleApiError(response, "API does not respond with data.");
    }
    const data = await response.json();

    return data.expenseId;
  };

  // Function to upload an image to Cloudinary
  const uploadImage = async (formdata, expid) => {
    try {
      const cloudinaryResponse = await fetch(API_UPLOAD, {
        method: "POST",
        body: formdata,
      });

      // Handle Cloudinary API response errors
      if (!cloudinaryResponse.ok) {
        handleApiError(
          cloudinaryResponse,
          "Error uploading image to Cloudinary. Please try again."
        );
      }
      const data = await cloudinaryResponse.json();

      for (const item of data) {
        const imageUrl = item?.secure_url;
        await saveuploadImageurl(imageUrl, expid);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setToast(
        true,
        "Error uploading image to Cloudinary. Please try again.",
        "warning"
      );
    }
  };

  // Handle API response errors in a consistent manner
  const handleApiError = (response, errorMessage) => {
    console.error(response.status);
    setToast(true, `Something went wrong. ${errorMessage}`, "warning");
    throw new Error(`API Error: ${response.status}`);
  };

  // Function to upload an image to Cloudinary
  const saveuploadImageurl = async (url, expid) => {
    const uploadobj = {};

    uploadobj["url"] = url;
    uploadobj["expenseId"] = expid;

    try {
      const respone = await fetch("api/expenseimage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(uploadobj),
      });

      if (!respone.ok) {
        handleApiError(
          respone,
          "Error adding image url to db. Please try again."
        );
      }
    } catch (error) {
      console.error("Error adding urls in expenseimage collection:", error);
      setToast(
        true,
        "Error uploading image to Cloudinary. Please try again.",
        "warning"
      );
    }
  };

  // Render the form component
  return <Form onSubmit={handleAdd} isEditMode={false} setToast={setToast} />;
}

export default CreatePage;
