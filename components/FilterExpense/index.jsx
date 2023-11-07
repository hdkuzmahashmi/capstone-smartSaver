import { FilterContainer, Select } from "@/design-system/StyledFilterExpense";

function FilterExpense({ selectedCategory, categoryNames, onCategoryFilter }) {
  return (
    <FilterContainer>
      <Select
        value={selectedCategory}
        onChange={(e) => onCategoryFilter(e.target.value)}
      >
        <option value="">All Categories</option>
        {categoryNames.map((categoryName) => (
          <option key={categoryName} value={categoryName}>
            {categoryName}
          </option>
        ))}
      </Select>
    </FilterContainer>
  );
}
export default FilterExpense;
