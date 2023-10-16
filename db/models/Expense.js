import mongoose from "mongoose";
import Category from "./Category";
import Currency from "./Currency";

const { Schema } = mongoose;

const expenseSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  categoryid: { type: [Schema.Types.ObjectId], ref: Category },
  currencyid: { type: [Schema.Types.ObjectId], ref: Currency },
});

const Expense =
  mongoose.models.Expense || mongoose.model("Expense", expenseSchema);

export default Expense;
