import { connectMongoDb } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

interface UserRequest {
  name: string;
  email: string;
  password: string;
  username: string
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    // Parse the incoming JSON request body
    const { name, email, username, password }: UserRequest = await request.json();

    // Connect to MongoDB
    await connectMongoDb();

    // Create the user in the database
    await User.create({ name, email, username, password });

    // Return a success response
    return NextResponse.json(
      { message: 'User registered' },
      { status: 201 }
    );
  } catch (error) {
    // Handle any errors that occur
    return NextResponse.json(
      { message: 'Failed to register user'},
      { status: 500 }
    );
  }
}
