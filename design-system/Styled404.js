import styled from "styled-components";

export const Styled404Page = styled.div`
  height: 100dvh;
  width: 100dvw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 32px;
  font-weight: 600;
  color: #1c91e3;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 105;
  background-image: url(/404.jpg);
  object-fit: contain;
  background-size: cover;
  background-position: 0% 59.5%;
  @media (max-width: 768px) {
    background-position: 65% 60%;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  margin-top: 273px;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 768px) {
    margin-top: 200px;
    gap: 10px;
  }
`;

export const Styled404 = styled.p`
  position: absolute;
  font-size: 110px;
  font-weight: bold;
  margin: 100px 1% 0 0;
  color: #fff;
  font-family: Futura;
  @media (max-width: 768px) {
    margin: 60px 1% 0 0;
  }
`;

export const StyledLoadingDiv = styled.div`
  height: 100dvh;
  width: 100dvw;
  background-color: #fff;
  z-index: 105;
  position: fixed;
  left: 0;
  top: 0;
`;
