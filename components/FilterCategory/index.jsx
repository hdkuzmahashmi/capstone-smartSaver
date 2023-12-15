import { Select } from "@/design-system/StyledFilterExpense";

const handleSelectChange = (event) => {
  onCategoryFilter(event.target.value);
};

function FilterCategory({ selectedCategory, categoryNames, onCategoryFilter }) {
  return (
    <Select value={selectedCategory} onChange={handleSelectChange}>
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
