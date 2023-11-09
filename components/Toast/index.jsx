import React, { useEffect } from "react";

import { ToastContainer, CloseButton } from "@/design-system/StyledToast";

function Toast({ message, showToast, setShowToast, type }) {
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000); // i will adjust the duration as needed later

      return () => clearTimeout(timer);
    }
  }, [showToast, setShowToast]);

  return (
    <ToastContainer $showToast={showToast} $type={type}>
      {message}
      {showToast && (
        <CloseButton onClick={() => setShowToast(false)}>&times;</CloseButton>
      )}
    </ToastContainer>
  );
}

export default Toast;
