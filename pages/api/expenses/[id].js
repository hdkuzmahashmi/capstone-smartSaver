import dbConnect from "@/db/dbconnect";
import Expense from "@/db/models/Expense";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const expense = await Expense.findById(id).populate("categoryId");

      if (!expense) {
        return response.status(404).json({ status: "Not Found" });
      }
      response.status(200).json(expense);
    } catch (error) {
      console.log("error from espense", error);
      return response
        .status(400)
        .json({ message: "Something went wrong", error: error });
    }
  }

  if (request.method === "PUT") {
    try {
      const expenseData = request.body;
      await Expense.findByIdAndUpdate(id, expenseData);
      response.status(200).json({ message: "Expense updated." });
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Something went wrong", error: error });
    }
  }

  if (request.method === "DELETE") {
    try {
      await Expense.findByIdAndDelete(id);
      response.status(200).json({ message: "Expense deleted." });
      Expense.find;
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Something went wrong", error: error });
    }
  }
}
