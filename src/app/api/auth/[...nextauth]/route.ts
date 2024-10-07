import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const  authOptions ={
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
    // ...add more providers here
  ],
};

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };
