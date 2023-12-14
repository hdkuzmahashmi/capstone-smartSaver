import mongoose from "mongoose";
import Expense from "./Expense";

const { Schema } = mongoose;

const expenseimageSchema = new Schema({
  url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  expenseId: { type: [Schema.Types.ObjectId], ref: Expense },
});

const ExpenseImage =
  mongoose.models.ExpenseImage ||
  mongoose.model("ExpenseImage", expenseimageSchema);

export default ExpenseImage;
