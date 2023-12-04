import { FileInput } from "@/design-system/StyledInput";
import React, { useState, useRef } from "react";
import ReceiptDisplay from "../ReceiptDisplay";
import styled from "styled-components";

const ReceiptContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px;
`;

function UploadFile({ onFileChange }) {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;

    console.log("selectedFiles:", selectedFiles);

    const newFiles = [...selectedFiles].filter((file) => {
      console.log("newFiles:", file);

      // Only accept files less than 1mb and of type 'image/'
      return file.size < 1024 * 1024 && file.type.startsWith("image/");
    });

    console.log({ selectedFiles, newFiles });

    setFiles((prevFiles) => [...newFiles, ...prevFiles]);
  };

  const handleDeleteFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <>
      <FileInput
        type="file"
        onChange={handleFileChange}
        accept="image/*"
        multiple
      />

      <ReceiptContainer>
        {files.map((file, index) => (
          <ReceiptDisplay
            key={index}
            url={URL.createObjectURL(file)}
            onClick={() => handleDeleteFile(index)}
          />
        ))}
      </ReceiptContainer>
    </>
  );
}

export default UploadFile;
