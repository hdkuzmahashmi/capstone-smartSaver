import mongoose from "mongoose";
import Category from "./Category";
import Currency from "./Currency";

const { Schema } = mongoose;

const expenseSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  createdAt: { type: Date, required: true },
  categoryId: { type: [Schema.Types.ObjectId], ref: Category },
  currencyId: { type: [Schema.Types.ObjectId], ref: Currency },
  userId: { type: String, required: false },
  secureUrl: { type: String },
});

const Expense =
  mongoose.models.Expense || mongoose.model("Expense", expenseSchema);

export default Expense;
