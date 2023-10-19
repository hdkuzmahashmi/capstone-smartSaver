import React from "react";
import useSWR from "swr";
import {
  FormContainer,
  FormTitle,
  FormGroup,
  StyledInput,
  StyledTextarea,
  StyledSelect,
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
          <>
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
            </FormGroup>
            <FormGroup>
              <StyledSelect
                id="categoryId"
                name="categoryId"
                required
                defaultValue={expense.categoryId[0]._id}
              >
                <option value="0"> Select Category</option>
                {data.map((data, index) => (
                  <option key={index} value={data._id}>
                    {data.name}
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
                defaultValue={expense.description}
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
                defaultValue={expense.amount}
              />
            </FormGroup>
          </>
        ) : (
          <>
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
                {data.map((data, index) => (
                  <option key={index} value={data._id}>
                    {data.name}
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
          </>
        )}

        <ButtonGroup>
          <StyledButton type="submit">
            {isEditMode ? "Update" : "Add"}
          </StyledButton>
          <StyledLink href="/">Back</StyledLink>
        </ButtonGroup>
      </form>
    </FormContainer>
  );
}

export default ExpenseForm;
