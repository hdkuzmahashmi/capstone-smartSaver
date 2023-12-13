import dbConnect from "@/db/dbconnect";
import ExpenseImage from "@/db/models/ExpenseImage";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response, authOptions);
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      if (session) {
        const expense = await ExpenseImage.find({ expenseId: id })
          .where("userId", session.user.email)
          .exec();

        if (!expense) {
          return response.status(404).json({ status: "Not Found" });
        }
        return response.status(200).json(expense);
      } else {
        const expense = await ExpenseImage.find({ expenseId: id }).exec();

        return response.status(200).json(expense);
      }
    } catch (error) {
      console.log("Error from Expense image", error);
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
        await ExpenseImage.findByIdAndUpdate(id, expenseData);
        response.status(200).json({ message: "Expense image updated." });
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
      await ExpenseImage.findByIdAndDelete(id);
      response.status(200).json({ message: "Expense image deleted." });
      ExpenseImage.find;
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Something went wrong", error: error });
    }
  }
}
