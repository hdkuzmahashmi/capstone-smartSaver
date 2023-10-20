import React from "react";
import useSWR from "swr";
import Link from "next/link";
import {
  FormContainer,
  FormTitle,
  FormGroup,
  StyledInput,
  ButtonGroup,
  StyledButton,
  StyledLink,
} from "./ExpenseForm.styled";

function ExpenseForm({ onSubmit, isEditMode, expense = [] }) {
  const { data, error } = useSWR(`/api/categories`);

  if (!data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <h1> Error:{error.message} </h1>;
  }

  return (
    <FormContainer>
      <FormTitle>{isEditMode ? "Edit Expense" : "Add Expense"}</FormTitle>
      <form onSubmit={onSubmit}>
        {isEditMode ? (
          <FormGroup>
            <StyledInput
              id="name"
              name="name"
              type="text"
              placeholder="Title"
              maxLength={100}
              required
              defaultValue={expense.name}
            />
            <StyledInput
              as="select"
              id="categoryId"
              name="categoryId"
              required
              defaultValue={expense.categoryId[0]._id}
            >
              <option value="0"> Select Category</option>
              {data.map((data) => (
                <option key={data._id} value={data._id}>
                  {data.name}
                </option>
              ))}
            </StyledInput>
            <StyledInput
              as="textarea"
              id="description"
              name="description"
              placeholder="Description"
              rows="4"
              maxLength={500}
              defaultValue={expense.description}
            />
            <StyledInput
              type="number"
              id="amount"
              name="amount"
              placeholder="Amount"
              min={0}
              required
              defaultValue={expense.amount}
            />
          </FormGroup>
        ) : (
          <FormGroup>
            <StyledInput
              id="name"
              name="name"
              type="text"
              placeholder="Title"
              maxLength={100}
              required
            />
            <StyledInput as="select" id="categoryId" name="categoryId" required>
              <option value="0"> Select Category</option>
              {data.map((data) => (
                <option key={data._id} value={data._id}>
                  {data.name}
                </option>
              ))}
            </StyledInput>
            <StyledInput
              as="textarea"
              id="description"
              name="description"
              placeholder="Description"
              rows="4"
              maxLength={500}
            />
            <StyledInput
              type="number"
              id="amount"
              name="amount"
              placeholder="Amount"
              min={0}
              required
            />
          </FormGroup>
        )}



         

        <ButtonGroup>
          <StyledButton type="submit">
            {isEditMode ? "Update" : "Add"}
          </StyledButton>
          <StyledButton as={Link} href="/" $link>
            Back
          </StyledButton>
        </ButtonGroup>
      </form>
    </FormContainer>
  );
}

export default ExpenseForm;
