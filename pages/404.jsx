import React from "react";
import { Styled404, StyledContent } from "@/design-system/Styled404";
import { Styled404Page } from "@/design-system/Styled404";
import { FilterButton } from "@/design-system/StyledFilterExpense";
import { useRouter } from "next/router";

const PageNotFound = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/../");
  };

  return (
    <>
      <Styled404Page>
        <Styled404>404 </Styled404>
        <StyledContent>
          Lost your Money?
          <FilterButton $isCenter $isOnImage onClick={handleButtonClick}>
            Its here
          </FilterButton>
        </StyledContent>
      </Styled404Page>
    </>
  );
};

export default PageNotFound;
