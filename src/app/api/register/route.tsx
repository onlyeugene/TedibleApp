import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";
import { connectMongoDb } from '../../../lib/mongodb';
import User from '../../../models/user';

interface UserRequest {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: number;
}

export async function POST(req: Request): Promise<NextResponse> {
  try {
    // Parse the incoming request JSON body
    const { firstname, lastname, email, password, phone}: UserRequest = await req.json();

    // Hash the user's password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Connect to MongoDB
    await connectMongoDb();

    // Create the new user in the database
    await User.create({ firstname,lastname, email, password: hashedPassword, phone });

    // Return a success response
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    // Handle any errors
    return NextResponse.json(
      { message: "Error creating user" },
      { status: 500 }
    );
  }
}
