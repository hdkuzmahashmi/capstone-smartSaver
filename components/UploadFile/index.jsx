import { FileInput } from "@/design-system/StyledInput";
import { useState } from "react";
import ReceiptDisplay from "../ReceiptDisplay";
import { ReceiptContainer } from "@/design-system/StyledUploadFile";

function UploadFile() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;

    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleDeleteFile = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  return (
    <>
      <FileInput type="file" onChange={handleFileChange} multiple name="file" />

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
