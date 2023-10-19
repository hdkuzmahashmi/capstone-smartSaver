import Router from "next/router";
import React from "react";
import styled from "styled-components";
import useSWR from "swr";
import Link from "next/link";

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

const ButtonGroup = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  border: 0.1rem outset black;
  color: gray;
  background-color: white;
  border-radius: 0.5rem;
  padding: 0.9rem;
  margin-right: 0.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: gray;
  border: 0.1rem outset black;
  border-radius: 0.5rem;
  padding: 0.8rem;
`;

function ExpenseForm() {
  const { data, error, mutate } = useSWR(`/api/categories`);

  if (!data) {
    return <div>Loading...</div>;
  }

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

  return (
    <FormContainer>
      <FormTitle>Add Expense</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <StyledInput
            id="name"
            name="name"
            type="text"
            placeholder="Title"
            maxLength={100}
            required
          />
        </FormGroup>
        <FormGroup>
          <StyledSelect id="categoryId" name="categoryId" required>
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
            maxLength={500}
          />
        </FormGroup>
        <FormGroup>
          <StyledInput
            type="number"
            id="amount"
            name="amount"
            placeholder="Amount"
            min={0}
            required
          />
        </FormGroup>

        <ButtonGroup>
          <StyledButton type="submit">Submit</StyledButton>
          <StyledLink href="/">Back</StyledLink>
        </ButtonGroup>
      </form>
    </FormContainer>
  );
}

export default ExpenseForm;
