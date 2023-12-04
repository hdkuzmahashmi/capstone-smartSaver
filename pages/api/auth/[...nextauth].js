import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./clientPromise";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),

    {
      id: "sendgrid",
      type: "email",
      async sendVerificationRequest({ identifier: email, url }) {
        const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
          body: JSON.stringify({
            personalizations: [{ to: [{ email }] }],
            from: { email: "werwein.dev@gmail.com" },
            subject: "Sign in to Your page",
            content: [
              {
                type: "text/plain",
                value: `Please click here to authenticate to SmartSaver:  ${url}`,
              },
            ],
          }),
          headers: {
            Authorization: `Bearer ${process.env.SENDGRID_API}`,
            "Content-Type": "application/json",
          },
          method: "POST",
        });

        if (!response.ok) {
          const { errors } = await response.json();
          throw new Error(JSON.stringify(errors));
        }
      },
    },
  ],
  adapter: MongoDBAdapter(clientPromise),
};
export default NextAuth(authOptions);
