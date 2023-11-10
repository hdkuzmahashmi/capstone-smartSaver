import styled from "styled-components";
import { commonFilterStyle } from "@/design-system/StyledFilterExpense";

export const RangeButton = styled.button`
  ${commonFilterStyle}
  background-color: transparent;
  width: 100%;
`;

export const RangeSlider = styled.input`
  background-color: red;
  text-align: center;
`;

export const SelectedRangeValue = styled.span`
  font-size: 16px;
  margin-left: 20px;
`;

export const RangeSliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;
