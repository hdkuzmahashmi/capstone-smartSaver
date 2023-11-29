import connect from "@/db/dbconnect";
import UserExpense from "@/db/models/UserExpense";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  await connect();
  const session = await getServerSession(request, response, authOptions);

  if (session) {
    response.status(200).json({
      content:
        "This is protected content. You can access this content because you are signed in.",
    });
  } else {
    response.status(400).json({
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
}
