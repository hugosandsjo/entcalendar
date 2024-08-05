// import dotenv from "dotenv";
// dotenv.config({ path: ".env" });

// import { sql } from "@vercel/postgres";
// import { unstable_noStore as noStore } from "next/cache";

// export async function fetchEntries(userSub) {
//   noStore();
//   try {
//     const data = await sql`
//           SELECT * FROM entries WHERE user_sub = ${userSub}`;
//     console.log("Fetched Entries:", data);
//     return data;
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch the latest entries.");
//   }
// }

// export async function createUser() {
//   try {
//     const data = await sql`
//     INSERT INTO users(id, username, email)
// VALUES (1, 'john_doe', 'john@example.com');
//     `;
//     return data;
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch the latest invoices.");
//   }
// }
