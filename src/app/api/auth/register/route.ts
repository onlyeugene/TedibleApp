import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { connectMongoDb } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import cloudinary from "@/lib/cloudinary";

// Interface for user request
interface UserRequest {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: number;
  image?: string; // Image can be optional
}

export async function POST(req: Request): Promise<NextResponse> {
  try {
    // Parse the incoming request JSON body
    const { firstname, lastname, email, password, phone, image }: UserRequest =
      await req.json();

    // Hash the user's password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Connect to MongoDB
    await connectMongoDb();

    // Check if an image is provided
    let imageUrl = "";
    if (image) {
      // Upload image to Cloudinary
      const result = await cloudinary.uploader.upload(image, {
        folder: "users",
        transformation: { width: 500, height: 500, crop: "fill" },
      });
      imageUrl = result.secure_url;
    }

    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return NextResponse.json(
        { message: `${email} already exists` },
        { status: 404 }
      );
    }
    // Create the new user in the database
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      phone,
      image: imageUrl || null, // Store image URL in the database
    });

    // Return a success response
    return NextResponse.json(
      { message: "User created successfully", user },
      { status: 201 }
    );
  } catch (error) {
    // Handle any errors
    return NextResponse.json(
      { message: "Error creating user", error },
      { status: 500 }
    );
  }
}
