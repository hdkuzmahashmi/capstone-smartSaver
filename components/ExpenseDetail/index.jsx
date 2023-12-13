import DeleteButton from "../DeleteButton";
import { StyledLink } from "@/design-system/StyledLink";
import { StyledGrid } from "@/design-system/StyledGrid";
import { StyledGridItem } from "@/design-system/StyledGridItem";
import { Icon } from "@iconify/react";
import { StyledCard } from "@/design-system/StyledCard";
import { StyledIcon } from "@/design-system/StyledIcon";
import { StyledIconButton } from "@/design-system/StyledIconButton";
import { StyledIconGroup } from "@/design-system/StyledIconGroup";
import { StyledTitle } from "@/design-system/StyledTitle";
import { StyledText } from "@/design-system/StyledText";
import { formatDate } from "@/assets/utils/DateUtils";
import { StyledCardImage } from "@/design-system/StyledCardImage";
import { StyledImage } from "@/design-system/StyledImage";

import useSWR from "swr";
import Loading from "@/components/Loading";

function ExpenseDetail({ expense = {}, handleDelete, setToast }) {
  const {
    data: expenseImage,
    isLoading,
    error,
  } = useSWR(`/api/expenseimage/${expense._id}`);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    setToast(
      true,
      "Something went wrong, API does not response data. Please contact to application administrator.",
      "error"
    );
    return;
  }

  if (!expenseImage) {
    setToast(
      true,
      "Something went wrong, API does not response data. Please contact to application administrator.",
      "warning"
    );
    return;
  }

  if (!expense._id || typeof expense._id !== "string") {
    return <h2>Something went wrong</h2>;
  }
  const formattedDate = formatDate(expense.createdAt);
  return (
    <>
      <StyledCard
        $addMarginBottom
        $isDetail
        $color={expense.categoryId[0].color}
      >
        <StyledIcon icon={expense.categoryId[0].icon} width={40} />
        <StyledTitle>{expense.name}</StyledTitle>
        <StyledGrid>
          <StyledText $isBold>Description:</StyledText>
          <StyledGridItem> {expense.description}</StyledGridItem>
          <StyledText $isBold>Category:</StyledText>
          <StyledGridItem> {expense.categoryId[0].name}</StyledGridItem>
          <StyledText $isBold>Amount:</StyledText>
          <StyledGridItem> {expense.amount} €</StyledGridItem>
          <StyledText $isBold>Date:</StyledText>
          <StyledGridItem> {formattedDate} </StyledGridItem>
        </StyledGrid>
        <StyledIconGroup>
          <StyledLink href={`/create/${expense._id}`}>
            <StyledIconButton>
              <Icon icon="icon-park-outline:edit" width="24" />
            </StyledIconButton>
          </StyledLink>
          <DeleteButton
            expenseId={expense._id}
            handleDelete={handleDelete}
            showList={true}
            expenseName={expense.name}
            setToast={setToast}
          ></DeleteButton>
        </StyledIconGroup>
      </StyledCard>

      {expenseImage && expenseImage.length > 0 && (
        <StyledCardImage $color={expense.categoryId[0].color}>
          {expenseImage.map((item, index) => (
            <div key={index}>
              {item.url.toLowerCase().endsWith(".pdf") ? (
                <iframe
                  src={item.url}
                  title={`Expense Receipt ${index + 1}`}
                  width="100%"
                  height="600px"
                ></iframe>
              ) : (
                <a href={item.url} target="_blank" rel="noreferrer">
                  <StyledImage
                    src={item.url}
                    alt={`Expense Receipt ${index + 1}`}
                    width={140}
                    height={230}
                  />
                </a>
              )}
            </div>
          ))}
        </StyledCardImage>
      )}
    </>
  );
}

export default ExpenseDetail;
