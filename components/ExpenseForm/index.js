import React from "react";
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

function ExpenseForm({ onSubmit, isEditMode, category = [] }) {
  return (
    <FormContainer>
      <FormTitle>{isEditMode ? "Add Expense" : "Edit Expense"}</FormTitle>
      <form onSubmit={onSubmit}>
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
            {category.map((category, index) => (
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
          <StyledButton type="submit">
            {isEditMode ? "Add" : "Update"}
          </StyledButton>
          <StyledLink href="/">Back</StyledLink>
        </ButtonGroup>
      </form>
    </FormContainer>
  );
}

export default ExpenseForm;
