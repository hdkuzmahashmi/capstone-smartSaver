import styled from "styled-components";
import Image from "next/image";
import { css } from "styled-components";

export const StyledImage = styled(Image)`
  margin-bottom: 10px;
  margin-left: 10px;

  ${({ $isReceipt }) =>
    $isReceipt &&
    css`
      height: auto;
      width: 95%;
    `};
`;
