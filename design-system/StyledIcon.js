import { Icon } from "@iconify/react";
import styled from "styled-components";

export const StyledIcon = styled(Icon)`
  float: right;
  box-shadow: inset 0 0 35px 5px rgba(0, 0, 0, 0.1),
    inset 0 2px 1px 1px rgba(255, 255, 255, 0.9),
    inset 0 -2px 1px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 3px;

  &:hover {
    border: 1px solid #eee;
  }
`;
