export function calculateMonthlyExpenses(data) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthlySumsByMonth = Array.from({ length: 12 }, (_, monthIndex) => {
    return { month: monthNames[monthIndex], totalExpense: 0 };
  });

  data.forEach((expense) => {
    const createdAtDate = new Date(expense.createdAt);
    const monthIndex = createdAtDate.getMonth();
    monthlySumsByMonth[monthIndex].totalExpense += expense.amount;
  });

  const monthNamesArray = monthlySumsByMonth.map((item) => item.month);
  const totalExpensesArray = monthlySumsByMonth.map(
    (item) => item.totalExpense
  );

  return { monthNames: monthNamesArray, totalExpenses: totalExpensesArray };
}
