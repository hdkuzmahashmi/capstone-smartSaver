import { PaginationButton } from "@/design-system/StyledPagination";
import { PaginationContainer } from "@/design-system/StyledPagination";

function ListItemPagination({ page, setPage, expenses, numberOfPages }) {
  if (expenses.length === 0) setPage(1);

  return (
    <PaginationContainer>
      {Array.from({ length: numberOfPages }, (_, i) => (
        <PaginationButton
          key={i}
          type="button"
          onClick={() => setPage(i + 1)}
          $active={page === i + 1}
        >
          {i + 1}
        </PaginationButton>
      ))}
    </PaginationContainer>
  );
}

export default ListItemPagination;
