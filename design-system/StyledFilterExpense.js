import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const Select = styled.select`
  padding: 10px;
  margin: 10px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background: #f9f9f9;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  transition: border-color 0.3s;

  &:hover {
    border-color: #666;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;
