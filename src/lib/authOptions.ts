import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDb } from "./mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      firstname: string;
      lastname: string;
      email: string;
      image: string;
      phone?: number;
    };
  }

  interface User {
    // username?: string;
    firstname?: string;
    lastname?: string;
    phone?: number;
    image?: string;
  }
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
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
            firstname: profile.given_name,
            lastname: profile.family_name,
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
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        try {
          await connectMongoDb();

          const user = await User.findOne({ email: credentials.email });
          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(credentials.password, user.password);
          if (!passwordsMatch) return null;

          return {
            id: user._id,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            image: user.image,
            phone: user.phone,
          };
        } catch (error) {
          console.error("Error in Credentials authorization:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      if (trigger === "update" && session?.firstname) token.firstname = session.firstname;
      if (trigger === "update" && session?.lastname) token.lastname = session.lastname;
      if (trigger === "update" && session?.phone) token.phone = session.phone;
      if (trigger === "update" && session?.image) token.image = session.image;

      if (user) {
        token.id = user.id;
        token.firstname = user.firstname;
        token.lastname = user.lastname;
        token.phone = user.phone;
        token.image = user.image;
      }

      await User.updateOne({ _id: token.id }, {
        firstname: token.firstname,
        lastname: token.lastname,
        phone: token.phone,
        image: token.image,
      });

      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          firstname: token.firstname,
          lastname: token.lastname,
          phone: token.phone,
        },
      };
    },
  },
  pages: {
    error: '',
  }
};