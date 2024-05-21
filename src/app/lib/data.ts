import { sql } from "@vercel/postgres";

export async function fetchEntries() {
  try {
    const data = await sql`
          SELECT * FROM entries`;
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest invoices.");
  }
}
