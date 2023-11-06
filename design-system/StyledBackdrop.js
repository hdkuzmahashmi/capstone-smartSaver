import styled from "styled-components";

export const StyledBackdrop = styled.div`
  height: 100dvh;
  width: 100dvw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 40px 80px 150px 100px rgba(0, 0, 0, 0.1) inset;
  cursor: auto;
`;
