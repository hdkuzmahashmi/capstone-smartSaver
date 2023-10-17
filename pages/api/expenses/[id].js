import dbConnect from "@/db/dbconnect";
import Expense from "@/db/models/Expense";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  if (request.method === "GET") {
    try {
      const expense = await Expense.findById(id);
      response.status(200).json(expense);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }

  if (request.method === "PUT") {
    try {
      const expenseData = request.body;
      await Expense.findByIdAndUpdate(id, expenseData);
      response.status(201).json({ message: "Expense updated." });
    } catch (error) {
      console.error(error);
      response
        .status(401)
        .json({ message: "Method not allowed.", error: error });
    }
  }

  if (request.method === "DELETE") {
    try {
      await Expense.findByIdAndDelete(id);
      response.status(201).json({ message: "Expense deleted." });
      Expense.find;
    } catch (error) {
      console.error(error);
      response
        .status(401)
        .json({ message: "Method not allowed", error: error });
    }
  }
}
