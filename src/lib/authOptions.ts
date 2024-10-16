// import { NextAuthOptions } from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import NextAuth from 'next-auth';
// import { connectMongoDb } from './mongodb';
// import User from '@/models/user';
// import bcrypt from 'bcryptjs';

// declare module 'next-auth' {
//   interface Session {
//     user: {
//       id: string;
//       name: string;
//       email: string;
//       username: string;
//       image: string;
//     };
//   }

//   interface User {
//     username?: string;
//   }
// }

// export const authOptions: NextAuthOptions = {
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: 'jwt',
//   },
//   providers: [
//     GoogleProvider({
//       clientId: process.env.AUTH_GOOGLE_ID!,
//       clientSecret: process.env.AUTH_GOOGLE_SECRET!,
//     }),
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         username: { label: 'Username', type: 'text' },
//         password: { label: 'Password', type: 'password' },
//       },
//       authorize: async (credentials) => {
//         if (!credentials?.username || !credentials.password) return null;

//         try {
//           // Connect to MongoDB
//           await connectMongoDb();

//           // Find user by email
//           const user = await User.findOne({ username: credentials.username });
//           if (!user) return null;

//           // Compare password
//           const passwordsMatch = await bcrypt.compare(credentials.password, user.password);
//           if (!passwordsMatch) return null;

//           // Return user object for NextAuth
//           return {
//             id: user._id,
//             name: user.name,
//             email: user.email,
//             username: user.username,
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
//     async signIn({ user, account }) {
//       if (account?.provider === 'google') {
//         const { name, email, image, username } = user;

//         try {
//           // Connect to MongoDB
//           await connectMongoDb();

//           // Check if user exists
//           const userExists = await User.findOne({ email });

//           if (!userExists) {
//             // Create new user if not exists
//             await User.create({
//               name,
//               email,
//               username, // Set username based on email
//               image,
//             });
//           } else {
//             // Update user if exists
//             await User.updateOne({ email }, { name, image, username });
//           }

//           return true;
//         } catch (error) {
//           console.error('Error during Google sign-in:', error);
//           return false;
//         }
//       }

//       return true;
//     },
//     async session({ session, token }) {
//       // Attach the username to the session object
//       const user = await User.findById(token.id); // Retrieve user by ID
//       if (user) {
//         session.user.username = user.username; // Attach username to session
//       }
//       return session;
//     },
//   },
// };

// export default NextAuth(authOptions);


import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDb } from './mongodb';
import User from '@/models/user';
import bcrypt from 'bcryptjs';

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      username: string;
      image: string;
    };
  }

  interface User {
    username?: string;
  }
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      // profile(profile) {
      //   return {
      //     id: profile.sub,
      //     name: profile.name,
      //     email: profile.email,
      //     image: profile.picture,
      //   };
      // },
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials?.username || !credentials.password) return null;

        try {
          // Connect to MongoDB
          await connectMongoDb();

          // Find user by username
          const user = await User.findOne({ username: credentials.username });
          if (!user) return null;

          // Compare password
          const passwordsMatch = await bcrypt.compare(credentials.password, user.password);
          if (!passwordsMatch) return null;

          // Return user object for NextAuth
          return {
            id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
            image: user.image,
          };
        } catch (error) {
          console.error('Error in Credentials authorization:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username || token.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.username = token.username as string;
      }
      return session;
    },
    // async signIn({ user, account }) {
    //   if (account?.provider === 'google') {
    //     const { name, email, image } = user;

    //     try {
    //       // Connect to MongoDB
    //       await connectMongoDb();

    //       // Check if the user already exists in the database
    //       const existingUser = await User.findOne({ email });

    //       if (!existingUser) {
    //         // If the user doesn't exist, create a new one
    //         await User.create({
    //           name,
    //           email,
    //           image,
    //           // username: email.split('@')[0], // You can generate the username from the email if not provided
    //         });
    //       } else {
    //         // If the user exists, update the name and image
    //         await User.updateOne({ email }, { name, image });
    //       }

    //       return true;
    //     } catch (error) {
    //       console.error('Error during Google sign-in:', error);
    //       return false;
    //     }
    //   }

    //   return true;
    // },
  },
};
