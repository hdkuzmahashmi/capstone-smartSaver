import React from "react";
import { Icon } from "@iconify/react";
import { FileContainer, FileName } from "@/design-system/SryledUploadFile";

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
