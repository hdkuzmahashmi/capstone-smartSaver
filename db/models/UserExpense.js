import mongoose from "mongoose";
import Category from "./Category";
import Currency from "./Currency";

const { Schema } = mongoose;

const userExpenseSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  createdAt: { type: Date, required: true },
  categoryId: { type: [Schema.Types.ObjectId], ref: Category },
  currencyId: { type: [Schema.Types.ObjectId], ref: Currency },
  createdBy: { type: String, required: true },
});

const UserExpense =
  mongoose.models.UserExpense ||
  mongoose.model("UserExpense", userExpenseSchema);

export default UserExpense;
