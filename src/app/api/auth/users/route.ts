import { connectMongoDb } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET() {
  // Connect to MongoDB
  await connectMongoDb();

  try {
    // Fetch all users from the database
    const users = await User.find({});

    if (!users || users.length === 0) {
      return NextResponse.json({ message: "No users found" }, { status: 404 });
    }

    // Return the list of users
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    // Handle any server error
    return NextResponse.json(
      { message: "Server Error", error },
      { status: 500 }
    );
  }
}
