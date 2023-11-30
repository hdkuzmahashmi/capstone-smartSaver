import useSWR from "swr";
import { useState } from "react";
import { StyledButton } from "@/design-system/StyledButton";
import { StyledCard } from "@/design-system/StyledCard";
import Loading from "../Loading";
import { StyledTitle } from "@/design-system/StyledTitle";
import { FormDateInput, StyledInput } from "@/design-system/StyledInput";
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

  function categoryValidation(event) {
    return event.target.checkValidity();
  }

  function trimStringInput(event) {
    return event.target.value.trim();
  }

  function validateStringInput(input, minLength) {
    const trimmedInput = input.trim();
    return trimmedInput.length >= minLength && /\S/.test(trimmedInput);
  }

  function validateNumberInput(input) {
    if (input.length === 0 && parseFloat(input) > 0.01) {
      return false;
    }
    const parts = input.split(/[\.,]/);
    if (
      parts.length <= 2 &&
      !isNaN(parts[0]) &&
      (!parts[1] || !isNaN(parts[1]))
    ) {
      const minValue = parseFloat(parts.join("."));
      if (minValue >= 0.01) {
        return true;
      }
    }
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
          <StyledLabel htmlFor="name">Expense Title*</StyledLabel>
          <StyledInput
            $isValid={isWrong.name}
            id="name"
            name="name"
            type="text"
            placeholder="Supermarket"
            maxLength={25}
            minLength={3}
            required
            defaultValue={isEditMode ? expense.name : ""}
            onBlur={(event) => {
              const trimedInput = trimStringInput(event);
              event.currentTarget.value = trimedInput;
              const isValid = validateStringInput(trimedInput, 3);
              setIsWrong((elements) => ({
                ...elements,
                name: !isValid,
              }));
            }}
          />
          {isWrong.name && (
            <StyledErrorMessage>
              Please enter an Expense Title
            </StyledErrorMessage>
          )}
          <StyledLabel htmlFor="categoryId">Select Category*</StyledLabel>
          <StyledInput
            $isValid={isWrong.categoryId}
            as="select"
            id="categoryId"
            name="categoryId"
            required
            selected
            defaultValue={isEditMode ? expense.categoryId[0]?._id : ""}
            onBlur={(event) => {
              const isValid = categoryValidation(event);
              setIsWrong((elements) => ({ ...elements, categoryId: !isValid }));
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
          <StyledLabel htmlFor="description">Description*</StyledLabel>
          <StyledInput
            $isValid={isWrong.description}
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
              const trimedInput = trimStringInput(event);
              console.log("Trimmed Input:", trimedInput);
              event.currentTarget.value = trimedInput;
              const isValid = validateStringInput(trimedInput, 5);
              console.log("Is Valid:", isValid);
              setIsWrong((elements) => ({
                ...elements,
                description: !isValid,
              }));
            }}
          />
          {isWrong.description && (
            <StyledErrorMessage>
              Please describe your Expense
            </StyledErrorMessage>
          )}
          <StyledLabel htmlFor="amount">Amount*</StyledLabel>
          <StyledInput
            $isValid={isWrong.amount}
            type="number"
            id="amount"
            name="amount"
            placeholder="0.01"
            required
            step="0.01"
            min={0.01}
            defaultValue={isEditMode ? expense.amount : ""}
            onBlur={(event) => {
              const sanitizedValue = parseFloat(event.currentTarget.value)
                .toFixed(2)
                .replace(/\.?0+$/, "");
              event.currentTarget.value = sanitizedValue;
              const isValid = validateNumberInput(sanitizedValue);
              setIsWrong((elements) => ({ ...elements, amount: !isValid }));
            }}
          />
          {isWrong.amount && (
            <StyledErrorMessage>
              Please enter a valid Amount (0.01)
            </StyledErrorMessage>
          )}
          <StyledLabel> Select a Date* </StyledLabel>
          <FormDateInput
            id="createdAt"
            name="createdAt"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholder="Amount"
            required
          />
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
