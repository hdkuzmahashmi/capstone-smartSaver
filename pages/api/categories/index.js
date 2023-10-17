import dbConnect from "@/db/dbconnect";
import Category from "@/db/models/Category";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    try {
      const category = await Category.find();
      response.status(200).json(category);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }
}
