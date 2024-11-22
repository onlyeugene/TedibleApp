import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await axios.post("http://localhost:3001/api/users", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.data;
    return NextResponse.json(data);
  } catch (error: unknown) {
    // console.error("Registration error:", error);
    return NextResponse.json(
      {
        error: "Failed to process registration",
      },
      {
        status: 500,
      }
    );
  }
}
