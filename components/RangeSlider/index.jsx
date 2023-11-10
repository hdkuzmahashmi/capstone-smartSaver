import { useState } from "react";
import {
  RangeButton,
  RangeSlider,
  SelectedRangeValue,
  RangeSliderContainer,
} from "@/design-system/StyledRangeSlider";
import { CollapsiblePanelContainer } from "@/design-system/StyledFilterExpense";
function AmountRange() {
  const [collapsedRange, setCollapsedRange] = useState(true);
  const [rangeValue, setRangeValue] = useState(0);

  return (
    <RangeSliderContainer>
      <RangeButton
        onClick={() => {
          setCollapsedRange(!collapsedRange);
        }}
      >
        Select an Amount Range
      </RangeButton>
      <CollapsiblePanelContainer collapsed={collapsedRange}>
        <RangeSlider>
          <input
            type="range"
            min="0"
            max="2000"
            step="1"
            value={rangeValue}
            onChange={(event) => {
              setRangeValue(event.target.value);
            }}
          />
          <SelectedRangeValue>{rangeValue} €</SelectedRangeValue>
        </RangeSlider>
      </CollapsiblePanelContainer>
    </RangeSliderContainer>
  );
}

export default AmountRange;
