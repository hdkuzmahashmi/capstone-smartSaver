import dbConnect from "@/db/dbconnect";
import Expense from "@/db/models/Expense";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    if (typeof request.query.page !== "undefined") {
      const page = parseInt(request.query.page, 10) || 0;
      const limit = parseInt(request.query.limit, 10) || 5;

      const pagesToSkip = page * limit;

      try {
        const [expenses, totalCount] = await Promise.all([
          Expense.find().populate("categoryId").skip(pagesToSkip).limit(limit),
          Expense.countDocuments(),
        ]);

        const hasNextPage = totalCount > (page + 1) * limit;

        return response.status(200).json({ hasNextPage, expenses });
      } catch (error) {
        return response.json({ message: "Something went wrong", error: error });
      }
    } else {
      try {
        const expense = await Expense.find().populate("categoryId");
        response.status(200).json(expense);
      } catch (error) {
        return response.status(400).json({ message: error });
      }
    }
  }

  if (request.method === "POST") {
    try {
      const expenseData = request.body;
      await Expense.create(expenseData);
      response.status(201).json({ message: "Expense created." });
    } catch (error) {
      return response.json({ message: "Something went wrong", error: error });
    }
  }
}
