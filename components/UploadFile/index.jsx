import { FileInput } from "@/design-system/StyledInput";
import React, { useState } from "react";

function UploadFile({ onFileChange }) {
  const [file, setFile] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    // setFile(selectedFile);
    // onFileChange(selectedFile);

    console.log("selectedFiles:", selectedFiles);

    const newFiles = [...selectedFiles].filter((file) => {
      console.log("newFiles:", file);

      if (file.size < 1024 * 1024 && file.type.startsWith("image/")) {
        return file;
      }
    });
    console.log({ selectedFiles, newFiles });

    setFile(prev=> [...newFiles, ...prev] )

    set
  };

  return (
    <FileInput
      type="file"
      onChange={handleFileChange}
      accept="image/*"
      multiple
    />
  );
}

export default UploadFile;
