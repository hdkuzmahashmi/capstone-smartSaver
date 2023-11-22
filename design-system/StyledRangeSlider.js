import styled from "styled-components";
import { commonFilterStyle } from "@/design-system/StyledFilterExpense";

export const RangeButton = styled.button`
  ${commonFilterStyle};
`;

export const RangeSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;

  input {
    flex: 1;
    width: 100%;
  }
`;

export const SelectedRangeValue = styled.span`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const RangeSliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
