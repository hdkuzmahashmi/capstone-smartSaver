import mongoose from "mongoose";

const { Schema } = mongoose;

const currencySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String },
});

const Currency =
  mongoose.models.Currency || mongoose.model("Currency", currencySchema);

export default Currency;
