// src/app/api/entries/route.js
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";

export async function GET(request) {
  noStore();

  const { searchParams } = new URL(request.url);
  const userSub = searchParams.get("userSub");
  console.log(userSub);
  console.log(request); // Log the entire request object

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
