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

  const toggleCollapseRange = () => {
    setCollapsedRange(!collapsedRange);
  };

  return (
    <RangeSliderContainer>
      <RangeButton onClick={toggleCollapseRange}>
        Select Amount Range
      </RangeButton>
      <CollapsiblePanelContainer collapsed={collapsedRange}>
        <RangeSlider
          type="range"
          min="0"
          max="10000"
          step="50"
          value={rangeValue}
          onChange={(event) => {
            setRangeValue(event.target.value);
          }}
        />
        <SelectedRangeValue>{rangeValue} €</SelectedRangeValue>
      </CollapsiblePanelContainer>
    </RangeSliderContainer>
  );
}

export default AmountRange;
