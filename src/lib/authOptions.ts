import { NextAuthOptions } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDb } from "./mongodb";
import User from "@/models/user";
// import bcrypt from "bcryptjs";
import axios from "axios";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      firstName: string;  // Changed from firstname
      lastName: string;   // Changed from lastname
      email: string;
      avatar: string;
      phone?: number;
    };
  }

  interface User {
    firstName?: string;   // Changed from firstname
    lastName?: string;    // Changed from lastname
    phone?: number;
    avatar?: string;
  }
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      authorization: {
        params: {
          scope: "openid profile email",
        },
      },
      async profile(profile) {
        await connectMongoDb();

        const user = await User.findOne({ email: profile.email });
        if (!user) {
          const newUser = await User.create({
            id: profile.sub,
            firstName: profile.given_name,
            lastName: profile.family_name,
            email: profile.email,
            image: profile.picture,
          });
          return newUser;
        }

        return user;
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        userType: { label: "User Type", type: "text" },
      },
      async authorize(credentials) {
        try {
          const { data } = await axios.post(
            "https://tedible-backend-1.onrender.com/api/auth/login",
            credentials,
            {
              headers: { "Content-Type": "application/json" },
            }
          );

          if (data.user) {
            return {
              ...data.user,
              token: data.token,
            };
          }
          return null;
        } catch (error) {
          if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || "Invalid credentials");
          }
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // token.accessToken = (user as unknown as { token: string }).token;
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        avatar: string;
        phone?: number;
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      // (session as unknown as { accessToken: any}).accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
      signIn: '/auth/login',
      error: '/auth/error',
      signOut: '/auth/login'
  },
  cookies: {
    sessionToken: {
      name: process.env.NODE_ENV === "production" 
        ? "__Secure-next-auth.session-token"
        : "next-auth.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
};
export { authOptions as GET, authOptions as POST };
