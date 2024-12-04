import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await axios.post(
      "http://localhost:3001/api/users/login",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

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




// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
    
//     const response = await fetch("http://localhost:3001/api/users/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body),
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       return NextResponse.json(
//         { message: data.message || "Login failed" },
//         { status: response.status }
//       );
//     }

//     // Assuming the backend returns a token
//     const { token, user } = data;

//     // Set the token in an HTTP-only cookie
//     (await
//           // Set the token in an HTTP-only cookie
//           cookies()).set('token', token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'lax',
//       path: '/',
//     });

//     return NextResponse.json({
//       user,
//       message: "Logged in successfully"
//     }, { status: 200 });
//   } catch (error) {
//     console.error("[LOGIN_ERROR]", error);
//     return NextResponse.json(
//       { message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }
