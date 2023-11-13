import React, { useState } from "react";
import useSWR from "swr";
import { useState } from "react";
import { StyledButton } from "@/design-system/StyledButton";
import { StyledCard } from "../../design-system/StyledCard";
import Loading from "../Loading";
import { StyledTitle } from "@/design-system/StyledTitle";
import {
  FormDateInput,
  FormDateLabel,
  StyledInput,
} from "@/design-system/StyledInput";
import { StyledLabel } from "@/design-system/StyledLabel";
import { StyledMargin } from "@/design-system/StyledMargin";
import { StyledContainer } from "@/design-system/StyledContainer";
import "react-datepicker/dist/react-datepicker.css";
import { StyledErrorMessage } from "@/design-system/StyledErrorMessage";

function Form({ onSubmit, expense = [], isEditMode, setToast }) {
  const { data, error } = useSWR(`/api/categories`);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formElements = {
    name: false,
    categoryId: false,
    description: false,
    amount: false,
  };
  const [isWrong, setIsWrong] = useState(formElements);

  function formValidation(event) {
    return event.target.checkValidity();
  }

  function validateNumberInput(input) {
    const trimmedInput = input.trim();
    if (trimmedInput.length === 0 && input.value > 0.01) {
      return false;
    }
    const parts = trimmedInput.split(/[\.,]/);
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      const minValue = parseFloat(parts.join("."));
      if (minValue >= 0.01 && parts[1].length <= 2) {
        return true;
      }
    }

    return false;
  }

  if (!data) {
    return <Loading />;
  }

  if (error) {
    setToast(
      true,
      "Something went wrong, API does not response data. Please contact to application administrator.",
      "warning"
    );
    return;
  }

  return (
    <StyledCard $addMarginBottom>
      <StyledTitle>{isEditMode ? "Edit Expense" : "Add Expense"}</StyledTitle>
      <form onSubmit={onSubmit}>
        <StyledMargin>
          <StyledLabel htmlFor="name">Expense Title</StyledLabel>
          <StyledInput
            $isValid={isWrong.name ? false : true}
            id="name"
            name="name"
            type="text"
            placeholder="Supermarket"
            maxLength={25}
            minLength={3}
            required
            defaultValue={isEditMode ? expense.name : ""}
            onBlur={(event) => {
              formValidation(event)
                ? setIsWrong({ name: false })
                : setIsWrong({ name: true });
            }}
          />
          {isWrong.name && (
            <StyledErrorMessage>
              Title should have at least 3 characters
            </StyledErrorMessage>
          )}
          <StyledLabel htmlFor="categoryId">Select Category</StyledLabel>
          <StyledInput
            $isValid={isWrong.categoryId ? false : true}
            as="select"
            id="categoryId"
            name="categoryId"
            required
            selected
            defaultValue={isEditMode ? expense.categoryId[0]._id : ""}
            onBlur={(event) => {
              formValidation(event)
                ? setIsWrong({ categoryId: false })
                : setIsWrong({ categoryId: true });
            }}
          >
            <option disabled value="">
              ---
            </option>
            {data.map((data) => (
              <option key={data._id} value={data._id}>
                {data.name}
              </option>
            ))}
          </StyledInput>
          {isWrong.categoryId && (
            <StyledErrorMessage>Please choose a category</StyledErrorMessage>
          )}
          <StyledLabel htmlFor="description">Description</StyledLabel>
          <StyledInput
            $isValid={isWrong.description ? false : true}
            as="textarea"
            id="description"
            name="description"
            placeholder="Food and household goods for November"
            rows="4"
            maxLength={500}
            minLength={4}
            required
            defaultValue={isEditMode ? expense.description : ""}
            onBlur={(event) => {
              formValidation(event)
                ? setIsWrong({ description: false })
                : setIsWrong({ description: true });
            }}
          />
          {isWrong.description && (
            <StyledErrorMessage>
              Description should have at least 4 characters
            </StyledErrorMessage>
          )}
          <StyledLabel htmlFor="amount">Amount</StyledLabel>
          <StyledInput
            $isValid={isWrong.amount ? false : true}
            type="text"
            id="amount"
            name="amount"
            placeholder="56.34"
            required
            step="0.01"
            defaultValue={isEditMode ? expense.amount : ""}
            onBlur={(event) => {
              validateNumberInput(event.currentTarget.value)
                ? setIsWrong({ amount: false })
                : setIsWrong({ amount: true });
            }}
          />
          <FormDateLabel> Select a Date: </FormDateLabel>
          <FormDateInput
            id="createdAt"
            name="createdAt"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholder="Amount"
            required
          />
          {isWrong.amount && (
            <StyledErrorMessage>Please enter an Amount</StyledErrorMessage>
          )}
        </StyledMargin>

        <StyledContainer $isFlexRow>
          <StyledButton type="submit" $isSubmitButton>
            {isEditMode ? "Update" : "Add"}
          </StyledButton>
        </StyledContainer>
      </form>
    </StyledCard>
  );
}

export default Form;
