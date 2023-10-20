import styled from "styled-components";

export const Backdrop = styled.div`
  height: 100dvh;
  width: 100dvw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.article`
  height: 150px;
  width: 250px;
  background-color: lightgrey;
  font-size: 1.1rem;
  outline: 1.5px solid red;
  border-radius: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  & p {
    margin: 0;
    padding: 0;
  }
`;

export const ModalButton = styled.button`
  padding: 6px;
  border: none;
  border-radius: 7px;
  &:hover {
    background-color: white;
    color: black;
  }
  ${({ $isConfirm }) =>
    $isConfirm
      ? `background-color: #d2042d; color: whitesmoke; &:hover{outline: 2px solid #d2042d;}`
      : `background-color: none; color: black; &:hover{outline: 2px solid darkgrey}`}
`;

export const FlexDiv = styled.div`
  display: flex;
  gap: 0.4rem;
`;
