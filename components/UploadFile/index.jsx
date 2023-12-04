import { FileInput } from "@/design-system/StyledInput";
import { useState } from "react";
import ReceiptDisplay from "../ReceiptDisplay";
import { ReceiptContainer } from "@/design-system/SryledUploadFile";

function UploadFile() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;

    const newFiles = [...selectedFiles].filter((file) => {
      // Only accept files less than 1mb and of type 'image/'
      // return file.size < 1024 * 1024 && file.type.startsWith("image/");

      return file;
    });

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
