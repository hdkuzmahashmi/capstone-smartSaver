import React, { useState } from "react";
import useSWR from "swr";
import { StyledButton } from "@/design-system/StyledButton";
import { StyledCard } from "../../design-system/StyledCard";
import Loading from "../Loading";
import { StyledTitle } from "@/design-system/StyledTitle";
import {
  FormDateInput,
  FormDateLabel,
  StyledInput,
} from "@/design-system/StyledInput";
import { StyledMargin } from "@/design-system/StyledMargin";
import { StyledContainer } from "@/design-system/StyledContainer";
import "react-datepicker/dist/react-datepicker.css";

function Form({ onSubmit, expense = [], isEditMode, setToast }) {
  const { data, error } = useSWR(`/api/categories`);
  const [selectedDate, setSelectedDate] = useState(new Date());

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
          <StyledInput
            id="name"
            name="name"
            type="text"
            placeholder="Title"
            maxLength={100}
            required
            defaultValue={isEditMode ? expense.name : ""}
          />
          <StyledInput
            as="select"
            id="categoryId"
            name="categoryId"
            required
            defaultValue={isEditMode ? expense.categoryId[0]._id : ""}
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
            required
            defaultValue={isEditMode ? expense.description : ""}
          />
          <StyledInput
            type="number"
            id="amount"
            name="amount"
            placeholder="Amount"
            min={0}
            required
            defaultValue={isEditMode ? expense.amount : ""}
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
