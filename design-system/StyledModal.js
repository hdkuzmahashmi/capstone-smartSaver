import styled from "styled-components";

export const StyledModal = styled.article`
  padding: 0 1rem 1rem 1rem;
  background-color: #f7f7f7;
  box-shadow: inset 0 0 35px 5px rgba(0, 0, 0, 0.1),
    inset 0 2px 1px 1px rgba(255, 255, 255, 0.9),
    inset 0 -2px 1px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  width: 320px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
