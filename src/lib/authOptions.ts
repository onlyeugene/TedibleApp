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
    };
  }

  interface User {
    // username?: string;
    firstname?: string;
    lastname?: string;
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
      profile(profile) {
        return {
          id: profile.sub,
          firstname: profile.given_name,
          lastname: profile.family_name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials.password) return null;

        try {
          // Connect to MongoDB
          await connectMongoDb();

          // Find user by email
          const user = await User.findOne({ email: credentials.email });
          if (!user) return null;

          // Compare password
          const passwordsMatch = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!passwordsMatch) return null;

          // Return user object for NextAuth
          return {
            id: user._id,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            image: user.image,
          };
        } catch (error) {
          console.error("Error in Credentials authorization:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.firstname = user.firstname;
        token.lastname = user.lastname;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.firstname = token.firstname as string;
        session.user.lastname = token.lastname as string;
      }
      return session;
    },
  },
};






















// export const authOptions: NextAuthOptions = {
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: 'jwt',
//   },
//   providers: [
//     GoogleProvider({
//       clientId: process.env.AUTH_GOOGLE_ID!,
//       clientSecret: process.env.AUTH_GOOGLE_SECRET!,
//       profile(profile) {
//         return {
//           id: profile.sub,
//           name: profile.firstname,
//           email: profile.email,
//           image: profile.picture,
//         };
//       },
//     }),
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'text' },
//         password: { label: 'Password', type: 'password' },
//       },
//       authorize: async (credentials) => {
//         if (!credentials?.email || !credentials.password) return null;

//         try {
//           // Connect to MongoDB
//           await connectMongoDb();

//           // Find user by username
//           const user = await User.findOne({ email: credentials.email });
//           if (!user) return null;

//           // Compare password
//           const passwordsMatch = await bcrypt.compare(credentials.password, user.password);
//           if (!passwordsMatch) return null;

//           // Return user object for NextAuth
//           return {
//             id: user._id,
//             name: user.name,
//             email: user.email,
//             firstname: user.firstname,
//             image: user.image,
//           };
//         } catch (error) {
//           console.error('Error in Credentials authorization:', error);
//           return null;
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.firstname = user.firstname
//         // token.username = user.username || token.username;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token) {
//         session.user.id = token.id as string;
//         // session.user.username = token.username as string;
//         session.user.firstname = token.firstname as string;
//       }
//       return session;
//     },
//     // async signIn({ user, account }) {
//     //   if (account?.provider === 'google') {
//     //     const { name, email, image } = user;

//     //     try {
//     //       // Connect to MongoDB
//     //       await connectMongoDb();

//     //       // Check if the user already exists in the database
//     //       const existingUser = await User.findOne({ email });

//     //       if (!existingUser) {
//     //         // If the user doesn't exist, create a new one
//     //         await User.create({
//     //           name,
//     //           email,
//     //           image,
//     //           // username: email.split('@')[0], // You can generate the username from the email if not provided
//     //         });
//     //       } else {
//     //         // If the user exists, update the name and image
//     //         await User.updateOne({ email }, { name, image });
//     //       }

//     //       return true;
//     //     } catch (error) {
//     //       console.error('Error during Google sign-in:', error);
//     //       return false;
//     //     }
//     //   }

//     //   return true;
//     // },
//   },
// };
