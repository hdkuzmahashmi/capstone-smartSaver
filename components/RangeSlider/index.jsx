import { useState } from "react";
import {
  RangeButton,
  RangeSlider,
  SelectedRangeValue,
  RangeSliderContainer,
} from "@/design-system/StyledRangeSlider";
import { CollapsiblePanelContainer } from "@/design-system/StyledFilterExpense";

function AmountRange({ onAmountRangeChange, selectedAmountRange, maxAmount }) {
  const [collapsedRange, setCollapsedRange] = useState(true);

  return (
    <RangeSliderContainer>
      <RangeButton
        onClick={() => {
          setCollapsedRange(!collapsedRange);
        }}
      >
        Select an Amount Range
      </RangeButton>
      <CollapsiblePanelContainer $collapsed={collapsedRange}>
        <RangeSlider>
          <input
            type="range"
            min="0"
            max={maxAmount}
            step="1"
            value={selectedAmountRange}
            onChange={(event) => {
              const newValue = parseInt(event.target.value);
              onAmountRangeChange(newValue);
            }}
          />
          <SelectedRangeValue>{selectedAmountRange} €</SelectedRangeValue>
        </RangeSlider>
      </CollapsiblePanelContainer>
    </RangeSliderContainer>
  );
}

export default AmountRange;
