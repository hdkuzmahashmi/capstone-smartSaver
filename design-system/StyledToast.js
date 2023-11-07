import styled, { keyframes, css } from "styled-components";

export const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const ToastContainer = styled.div`
  position: fixed;
  width: 80%;
  top: 20px;
  right: 20px;

  background-color: ${(props) =>
    props.type === "info"
      ? "#188be7"
      : props.type === "error"
      ? "#fa0530"
      : props.type === "warning"
      ? "#f5500a"
      : props.type === "success"
      ? "#6fb44b"
      : " #333"};
  color: #fff;
  padding: 10px 20px;
  border-radius: 7px;
  opacity: 0;
  visibility: hidden;
  animation: ${slideIn} 0.3s ease;

  ${(props) =>
    props.showToast &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  outline: none;
`;
