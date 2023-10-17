import React from "react";
import styled from "styled-components";

function ExpenseListDetail({ name, description, amount }) {
  const Td = styled.td`
    border: 1px solid #000;
    padding: 8px;
    text-align: left;
  `;

  return (
    <>
      <Td>{name}</Td>
      <Td>{description}</Td>
      <Td>{amount} €</Td>
    </>
  );
}

export default ExpenseListDetail;
