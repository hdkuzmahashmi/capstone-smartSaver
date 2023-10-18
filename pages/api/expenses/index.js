import dbConnect from "@/db/dbconnect";
import Expense from "@/db/models/Expense";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    try {
      const expense = await Expense.find();
      response.status(200).json(expense);
    } catch (error) {
      return response.status(400).json({ message: error });
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
