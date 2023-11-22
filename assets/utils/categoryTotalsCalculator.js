export const calculateCategoryTotals = (expenses) => {
    return Object.values(
      expenses.reduce((acc, expense) => {
        const { name, color, icon } = expense.categoryId[0];
        const amount = expense.amount;
  
        if (!acc[name]) {
          acc[name] = {
            name,
            total: 0,
            color,
            icon,
          };
        }
  
        acc[name].total += amount;
        return acc;
      }, {})
    );
  };
  