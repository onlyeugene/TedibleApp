// import GoogleProvider from 'next-auth/providers/google';
// import CredentialsProvider from "next-auth/providers/credentials"; // Correct import
// import NextAuth from 'next-auth/next';

// export const {auth , handlers , sigIn, sigOut}= NextAuth({
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: 'jwt'
//   },
//   providers: [
//     GoogleProvider({
//       clientId: process.env.AUTH_GOOGLE_ID!,
//       clientSecret: process.env.AUTH_GOOGLE_SECRET!,
//     }),
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         username: { label: "Username", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       authorize: async (credentials) => {
//         if (!credentials) {
//           return null;
//         }

//         const res = await fetch("https://tedible-backend.onrender.com/api/auth/login", {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json',  },
//           body: JSON.stringify({
//             username: credentials?.username,
//             password: credentials?.password,
//           }),
//         });

//         const user = await res.json();

//         if (res.ok && user) {
//             return {
//                 name: user.name, // Username from the API response
//                 id: user._id 
//             };
//           }
//         return null;
//       }
//     }),
    
//   ],
// });

// // export default NextAuth(authOptions);
 