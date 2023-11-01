import styled from "styled-components";

export const LoadingAnimation = styled.div`
  position: absolute;
  padding: 0;
  margin: 0;
  top: calc(50% - 41px);
  transform: translate(-50%, -50%);
  left: calc(50% - 41px);
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid #56a2e8;
  border-bottom: 10px solid #56a2e8;
  width: 82px;
  height: 82px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
