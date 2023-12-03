import React from "react";
import jpg from "@/assets/404.jpg";
import { StyledImage } from "@/design-system/Styled404";
import { Styled404Content } from "@/design-system/Styled404";
import { FilterButton } from "@/design-system/StyledFilterExpense";

const PageNotFound = () => {
  return (
    <>
      <Styled404Content>
        <StyledImage src={jpg} alt="jpg" />
        <FilterButton href="././">Back to Dashboard</FilterButton>
      </Styled404Content>
    </>
  );
};

export default PageNotFound;
