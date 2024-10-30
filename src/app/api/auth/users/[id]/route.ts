import { connectMongoDb } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

interface Params {
  id: string;
}

// GET user by ID
export async function GET(req: Request & { params: Params }) {
  await connectMongoDb();

  const { id } = req.params; // Adjusted access to `params`

  try {
    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json(
        { message: `User with id ${id} not found` },
        { status: 404 }
      );
    }
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Server Error", error },
      { status: 500 }
    );
  }
}

// EDIT user by ID
export async function PUT(req: Request & { params: Params }) {
  await connectMongoDb();
  const { id } = req.params; // Adjusted access to `params`
  const body = await req.json();

  try {
    const user = await User.findByIdAndUpdate(id, body, { new: true });

    if (!user) {
      return NextResponse.json(
        { message: `User with id ${id} not found` },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: `User with Id ${id} updated successfully`, user },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server Error", error },
      { status: 500 }
    );
  }
}

// DELETE user by ID
export async function DELETE(req: Request & { params: Params }) {
  await connectMongoDb();

  try {
    const user = await User.findByIdAndDelete(req.params.id); // Adjusted access to `params`
    if (!user) {
      return NextResponse.json(
        { message: `User with id ${req.params.id} not found` },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: `User with id ${req.params.id} deleted successfully` },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server Error", error },
      { status: 500 }
    );
  }
}
