import { useState, useEffect } from "react";
import {
  Styled404,
  StyledContent,
  StyledLoadingDiv,
} from "@/design-system/Styled404";
import { Styled404Page } from "@/design-system/Styled404";
import { FilterButton } from "@/design-system/StyledFilterExpense";
import { useRouter } from "next/router";

const PageNotFound = () => {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setIsLoaded(true);
    };
    image.src = "/404.jpg";
  }, []);

  const handleButtonClick = () => {
    router.push("/../");
  };

  if (!isLoaded) {
    return <StyledLoadingDiv></StyledLoadingDiv>;
  }

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
