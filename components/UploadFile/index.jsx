import { FileInput } from "@/design-system/StyledInput";
import { useState, useRef } from "react";
import ReceiptDisplay from "../ReceiptDisplay";
import styled from "styled-components";

const ReceiptContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 10px;
  gap: 2px;
`;

function UploadFile() {
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

  const handleDeleteFile = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
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
            fileName={file.name}
            onClick={() => handleDeleteFile(file.name)}
          />
        ))}
      </ReceiptContainer>
    </>
  );
}

export default UploadFile;
