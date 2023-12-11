import dbConnect from "@/db/dbconnect";
import Expense from "@/db/models/Expense";
import {
  validateStringInput,
  validateAmountInput,
} from "@/utils/formValidation";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response, authOptions);
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      if (session) {
        const expense = await Expense.findById(id)
          .populate("categoryId")
          .where("userId", session.user.email);

        if (!expense) {
          return response.status(404).json({ status: "Not Found" });
        }
        return response.status(200).json(expense);
      }
    } catch (error) {
      console.log("Error from Expense", error);
      return response
        .status(400)
        .json({ message: "Something went wrong", error: error });
    }
  }

  if (request.method === "PUT") {
    try {
      const expenseData = request.body;
      if (
        validateStringInput(request.body.name, "title") &&
        validateStringInput(request.body.description, "description") &&
        validateAmountInput(request.body.amount)
      ) {
        await Expense.findByIdAndUpdate(id, expenseData);
        response.status(200).json({ message: "Expense updated." });
      } else {
        response
          .status(403)
          .json({ error: "Invalid Data. Please check your Expense entry" });
      }
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
