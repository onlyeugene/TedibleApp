import NextAuth, { AuthOptions } from "next-auth";

import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
    // ...add more providers here if needed
  ],
  secret: process.env.AUTH_SECRET,
};

const handler = NextAuth(authOptions);

// Export as GET and POST handlers
export { handler as GET, handler as POST };
