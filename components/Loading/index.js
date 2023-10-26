import styled from "styled-components";

function Loading() {
  return <LoadingAnimation />;
}

const LoadingAnimation = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
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

export default Loading;
