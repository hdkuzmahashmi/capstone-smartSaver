import dbConnect from "@/db/dbconnect";
import Currency from "@/db/models/Currency";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    try {
      const currency = await Currency.find();
      response.status(200).json(currency);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }
}
