// // pages/api/update-user.ts
// import { NextApiRequest, NextApiResponse } from "next";
// import User from "@/models/user";
// import { connectMongoDb } from "@/lib/mongodb";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     const { email, firstname, lastname, phone, image } = req.body;

//     try {
//       await connectMongoDb();

//       const updatedUser = await User.findOneAndUpdate(
//         { email: email },
//         { firstname, lastname, phone, image },
//         { new: true } // Return the updated document
//       );

//       if (!updatedUser) {
//         return res.status(404).json({ message: "User not found" });
//       }

//       return res.status(200).json({ message: "User updated successfully", user: updatedUser });
//     } catch (error) {
//       console.error("Error updating user:", error);
//       return res.status(500).json({ message: "Error updating user" });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     return res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
