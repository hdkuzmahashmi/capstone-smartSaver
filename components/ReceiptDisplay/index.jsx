import React from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";

const FileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FileName = styled.span`
  margin-right: 10px;
  font-size: 14px;
`;

function ReceiptDisplay({ fileName, onClick }) {
  return (
    <FileContainer>
      <FileName>{fileName}</FileName>
      <Icon
        icon="iwwa:delete"
        width="20"
        height="20"
        onClick={onClick}
        color="red"
      />
    </FileContainer>
  );
}

export default ReceiptDisplay;
