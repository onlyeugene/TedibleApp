import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
    // ...add more providers here if needed
  ],
  secret: process.env.AUTH_SECRET,
});

// Export as GET and POST handlers
export { handler as GET, handler as POST };
