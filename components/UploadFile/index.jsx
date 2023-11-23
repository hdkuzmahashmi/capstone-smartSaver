import { FileInput } from "@/design-system/StyledInput";
import React, { useState } from "react";

function UploadFile({ onFileChange }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    onFileChange(selectedFile);
  };

  return <FileInput type="file" onChange={handleFileChange} accept="image/*" />;
}

export default UploadFile;
