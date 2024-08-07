"use server";

import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const addEntry = async (formData: FormData) => {
  const user_sub = formData.get("user_sub") as string | null;
  const title = formData.get("title") as string | null;
  const category = formData.get("category") as string | null;
  const genre = formData.get("genre") as string | null;
  const director = formData.get("director") as string | null;
  const year = formData.get("year") as string | null;
  const description = formData.get("description") as string | null;
  const month = formData.get("month") as string | null;

  console.log("Submitted form data:", {
    user_sub,
    title,
    category,
    genre,
    director,
    year,
    description,
    month,
  });

  if (
    !user_sub ||
    !title ||
    !category ||
    !genre ||
    !director ||
    !year ||
    !description ||
    !month
  ) {
    throw new Error("Missing required form data");
  }

  await sql`
        INSERT INTO entries (user_sub, title, category, genre, director, year, description, month)
        VALUES (${user_sub}, ${title}, ${category}, ${genre}, ${director}, ${year}, ${description}, ${month})
      `;

  // use revalidatePath here?
  redirect("/dashboard");
};

export const editEntry = async () => {};

export const deleteEntry = async (id: number) => {
  await sql`DELETE FROM entries WHERE id = ${id}`;
};
