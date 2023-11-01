import React from "react";
import useSWR from "swr";
import { StyledButton } from "@/design-system/StyledButton";
import { StyledCard } from "../../design-system/StyledCard";
import Loading from "../Loading";
import { StyledTitle } from "@/design-system/StyledTitle";
import { StyledInput } from "@/design-system/StyledInput";
import { StyledMargin } from "@/design-system/StyledMargin";
import { StyledContainer } from "@/design-system/StyledContainer";
function Form({ onSubmit, expense = [], isEditMode }) {
  const { data, error } = useSWR(`/api/categories`);

  if (!data) {
    return <Loading />;
  }

  if (error) {
    return <h2> Error:{error.message} </h2>;
  }

  return (
    <StyledCard>
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
