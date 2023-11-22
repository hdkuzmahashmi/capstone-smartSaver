import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0px;
  padding: 0px;
  background-color: #f0f0f0;
  box-shadow: inset 0 0 35px 5px rgba(0, 0, 0, 0.1),
    inset 0 2px 1px 1px rgba(255, 255, 255, 0.9),
    inset 0 -2px 1px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const PaginationLabel = styled.label`
  margin-right: 10px;
  margin-left: 15px;
`;

const PaginationSelect = styled.select`
  margin-right: 10px;
  width: 20%;
`;

const PaginationButton = styled.button`
  padding: 8px 12px;
  background-color: #56a2e8;
  color: #fff;
  border: none;
  cursor: pointer;
  margin: 10px 5px 10px 2px;
  border-radius: 15px;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover:disabled {
    background-color: #ccc;
  }
`;

const ListItemPagination = ({
  limit,
  setLimit,
  page,
  setPage,
  hasNextPage,
}) => {
  return (
    <PaginationContainer>
      <div>
        <PaginationLabel htmlFor="limit-select">
          Results per page:
        </PaginationLabel>
        <PaginationSelect
          name="limit"
          id="limit-select"
          onChange={(event) => setLimit(event.target.value)}
          value={limit}
        >
          <option value="">--Please choose an option--</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </PaginationSelect>
      </div>
      <SubContainer>
        <PaginationLabel>
          Current Page <strong>{page + 1}</strong>
        </PaginationLabel>
        <PaginationButton
          type="button"
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
        >
          <Icon icon="typcn:arrow-back" hFlip={false} />
        </PaginationButton>
        <PaginationButton
          type="button"
          onClick={() => setPage(page + 1)}
          disabled={!hasNextPage}
        >
          <Icon icon="typcn:arrow-back" hFlip={true} />
        </PaginationButton>
      </SubContainer>
    </PaginationContainer>
  );
};

export default ListItemPagination;
