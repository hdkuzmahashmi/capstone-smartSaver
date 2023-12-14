import dbConnect from "@/db/dbconnect";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import ExpenseImage from "@/db/models/ExpenseImage";

export default async function handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response, authOptions);

  if (request.method === "GET") {
    try {
      if (session) {
        const expense = await ExpenseImage.find({
          userId: session.user.email,
        })
          .populate("expenseId")
          .sort({ createdAt: -1 });
        return response.status(200).json(expense);
      }
      const expense = await ExpenseImage.find({
        $or: [{ userId: { $exists: false } }, { userId: null }],
      })
        .populate("expenseId")
        .sort({ createdAt: -1 });
      response.status(200).json(expense);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }

  if (request.method === "POST") {
    try {
      if (session) {
        const expenseData = { ...request.body, userId: session.user.email };
        await ExpenseImage.create(expenseData);
        return response.status(201).json({ message: "Expense image created." });
      }
      const expenseData = request.body;

      const createdExpenseImg = await ExpenseImage.create(expenseData);

      return response.status(201).json({ message: "Expense image created." });
    } catch (error) {
      return response.json({ message: "Something went wrong", error: error });
    }
  }
}
