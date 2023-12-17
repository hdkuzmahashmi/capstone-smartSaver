import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
`;

const PaginationLabel = styled.label`
  margin-right: 10px;
  margin-left: 15px;
  font-size: 0.8rem;
  color: #666;
`;

const PaginationSelect = styled.select`
  margin-right: 10px;
  width: 30%;
  padding: 8px;
  font-size: 0.8rem;
  color: #666;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const PaginationButton = styled.button`
  padding: 8px 12px;
  background-color: #56a2e8;
  color: #fff;
  border: none;
  cursor: pointer;
  margin: 10px 5px 10px 2px;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

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
  expenses,
}) => {
  if (expenses.length === 0) setPage(1);
  if (expenses.length < limit) hasNextPage = false;
  else hasNextPage = true;
  return (
    <PaginationContainer>
      <div>
        <PaginationLabel htmlFor="limit-select">Records:</PaginationLabel>
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
          Page <strong>{page}</strong>
        </PaginationLabel>
        <PaginationButton
          type="button"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
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
