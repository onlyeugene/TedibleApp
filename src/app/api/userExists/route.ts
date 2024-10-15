import { connectMongoDb } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Connect to MongoDB
    await connectMongoDb();

    // Parse JSON request body
    const { email }: { email: string } = await req.json();

    // Find the user by email and select only the _id field
    const user = await User.findOne({ email }).select("_id");
    
    // Log the user for debugging purposes
    console.log("user: ", user);

    // Return the user as JSON response
    return NextResponse.json({ user });
  } catch (error) {
    // Log the error to the console
    console.error("Error:", error);
    
    // Return an error response
    return NextResponse.json(
      { message: "An error occurred" },
      { status: 500 }
    );
  }
}
