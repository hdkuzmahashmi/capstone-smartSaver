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
}
