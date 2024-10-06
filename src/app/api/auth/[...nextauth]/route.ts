import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = nextAuth ({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
    // ...add more providers here
  ],
});


export { handler as GET, handler as POST };
