import { Select } from "@/design-system/StyledFilterExpense";

function FilterCategory({ selectedCategory, categoryNames, onCategoryFilter }) {
  return (
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
  );
}

export default FilterCategory;
