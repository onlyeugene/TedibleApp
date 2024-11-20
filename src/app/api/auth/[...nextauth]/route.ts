import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);


// Export as GET and POST handlers
export { handler as GET, handler as POST };
