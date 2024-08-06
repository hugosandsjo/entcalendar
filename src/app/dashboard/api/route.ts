// src/app/api/entries/route.js
import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userSub = searchParams.get("userSub");

  try {
    const data = await sql`SELECT * FROM entries WHERE user_sub = ${userSub}`;
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { message: "Failed to fetch entries." },
      { status: 500 }
    );
  }
}

// export async function POST(request: NextRequest) {
//   try {
//     const formData = await request.json();
//     const { title, year, publisher, description, genres } = formData;

//     // Insert data into the database
//     const result = await sql`
//       INSERT INTO entries (title, year, publisher, description, genres)
//       VALUES (${title}, ${year}, ${publisher}, ${description}, ${genres})
//     `;

//     return NextResponse.json(
//       { message: "Entry added successfully!" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Database Error:", error);
//     return NextResponse.json(
//       { message: "Failed to add entry." },
//       { status: 500 }
//     );
//   }
// }
