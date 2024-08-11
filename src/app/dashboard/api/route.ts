// src/app/api/entries/route.js
import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(request: NextRequest) {
  try {
    const data = await sql`SELECT * FROM entries`;
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { message: "Failed to fetch entries." },
      { status: 500 }
    );
  }
}
