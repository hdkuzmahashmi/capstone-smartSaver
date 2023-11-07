import styled from "styled-components";

export const LoadingAnimation = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: fixed;
  animation: rotate 1s linear infinite;
  top: calc(50% - 24px);
  left: calc(50% - 24px);
  transform: translate(-50%, -50%);

  &::before,
  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid #202020;
    animation: prixClipFix 2s linear infinite;
  }
  &::after {
    transform: rotate3d(90, 90, 0, 180deg);
    border-color: #56a2e8;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes prixClipFix {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    75%,
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
  }
`;
