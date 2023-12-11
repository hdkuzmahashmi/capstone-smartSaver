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

  if (request.method === "GET") {
    if (typeof request.query.page !== "undefined") {
      const page = parseInt(request.query.page, 10) || 0;
      const limit = parseInt(request.query.limit, 10) || 5;

      const pagesToSkip = page * limit;

      try {
        if (session) {
          const [expenses, totalCount] = await Promise.all([
            Expense.find({ userId: session.user.email })
              .populate("categoryId")
              .skip(pagesToSkip)
              .limit(limit),
            Expense.countDocuments(),
          ]);
          const hasNextPage = totalCount > (page + 1) * limit;

          return response.status(200).json({ hasNextPage, expenses });
        }
        const [expenses, totalCount] = await Promise.all([
          Expense.find({
            $or: [{ userId: { $exists: false } }, { userId: null }],
          })
            .populate("categoryId")
            .skip(pagesToSkip)
            .limit(limit),
          Expense.countDocuments(),
        ]);

        const hasNextPage = totalCount > (page + 1) * limit;

        return response.status(200).json({ hasNextPage, expenses });
      } catch (error) {
        return response.json({ message: "Something went wrong", error: error });
      }
    } else {
      try {
        if (session) {
          const expense = await Expense.find({
            userId: session.user.email,
          })
            .populate("categoryId")
            .sort({ createdAt: -1 });
          return response.status(200).json(expense);
        }
        const expense = await Expense.find({
          $or: [{ userId: { $exists: false } }, { userId: null }],
        })
          .populate("categoryId")
          .sort({ createdAt: -1 });
        response.status(200).json(expense);
      } catch (error) {
        return response.status(400).json({ message: error });
      }
    }
  }

  if (request.method === "POST") {
    try {
      if (session) {
        const expenseData = { ...request.body, userId: session.user.email };
        const createdExpense = await Expense.create(expenseData);
        const expenseId = createdExpense._id; // Access the ObjectId

        return response
          .status(201)
          .json({ message: "Expense created.", expenseId });
        //return response.status(201).json({ message: "Expense created." });
      }
      const expenseData = request.body;
      if (
        validateStringInput(request.body.name, "title") &&
        validateStringInput(request.body.description, "description") &&
        validateAmountInput(request.body.amount)
      ) {
        const createdExpense = await Expense.create(expenseData);
        const expenseId = createdExpense._id; // Access the ObjectId

        return response
          .status(201)
          .json({ message: "Expense created.", expenseId });
      } else {
        response
          .status(403)
          .json({ error: "Invalid Data. Please check your Expense entry" });
      }
    } catch (error) {
      return response.json({ message: "Something went wrong", error: error });
    }
  }
}
