import { connectMongoDb } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Connect to MongoDB
    await connectMongoDb();

    // Parse JSON request body
    const { email }: { email: string } = await req.json();

    // Validate the email before querying
    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    // Find the user by email and select only the _id field
    const user = await User.findOne({ email }).select("_id");

    // Log the user for debugging purposes
    console.log("User found: ", user);

    // Check if user was found
    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    // Return the user as JSON response
    return NextResponse.json({ user }, { status: 200 });

  } catch (error) {
    // Log the error to the console for debugging
    console.error("Error:", error);

    // Return an error response
    return NextResponse.json(
      { message: "An error occurred"},
      { status: 500 }
    );
  }
}
