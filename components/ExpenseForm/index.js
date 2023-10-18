import Router from "next/router";
import React from "react";
import styled from "styled-components";
import useSWR from "swr";

const FormContainer = styled.div`
  max-width: 20rem;
  margin: 0 auto;
  width: 24rem;
`;

const FormTitle = styled.h1`
  font-weight: bold;
  padding-bottom: 1rem;
  font-size: 1.5rem;
`;

const FormGroup = styled.div`
  margin-top: 1rem;
`;

const StyledInput = styled.input`
  margin-top: 0.25rem;
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background-color: #fff;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0.375rem;
  outline: none;
  font-size: 1rem;
`;

const StyledTextarea = styled.textarea`
  margin-top: 0.25rem;
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background-color: #fff;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0.375rem;
  outline: none;
  font-size: 1rem;
`;

const StyledSelect = styled.select`
  margin-top: 0.25rem;
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background-color: #fff;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0.375rem;
  outline: none;
  font-size: 1rem;
`;

const StyledButton = styled.button`
  /* margin-top: 1rem;
  border: none;
  padding: 0.5rem 1rem;
  background-color: #667eea;
  color: #fff;
  width: 100%;
  cursor: pointer;
  border-radius: 0.375rem; */

  border: 0.1rem outset black;
  color: gray;
  background-color: white;
  border-radius: 0.5rem;
  padding: 0.9rem;
  width: 50%;
`;

function ExpenseForm() {
  const { data, error, mutate } = useSWR(`/api/categories`);

  if (!data) return;
  if (error) {
    return <h1> Error:{error.message} </h1>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Handle form submission logic here
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
  function handleback() {
    Router.push("/");
  }

  return (
    <FormContainer>
      <FormTitle>Add Expense</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <StyledInput id="name" name="name" type="text" placeholder="Title" />
        </FormGroup>
        <FormGroup>
          <StyledSelect id="categoryId" name="categoryId">
            <option value="0"> Select Category</option>
            {data.map((category, index) => (
              <option key={index} value={category._id}>
                {category.name}
              </option>
            ))}
          </StyledSelect>
        </FormGroup>
        <FormGroup>
          <StyledTextarea
            id="description"
            name="description"
            placeholder="Description"
            rows="4"
          />
        </FormGroup>
        <FormGroup>
          <StyledInput
            id="amount"
            name="amount"
            type="text"
            placeholder="Amount"
          />
        </FormGroup>

        <FormGroup>
          <StyledButton type="submit">Submit</StyledButton>
          <StyledButton onClick={handleback}>Back</StyledButton>
        </FormGroup>
      </form>
    </FormContainer>
  );
}

export default ExpenseForm;
