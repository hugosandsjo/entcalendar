"use server";

import { sql } from "@vercel/postgres";

export const addEntry = async (formData: FormData) => {
  const user_sub = formData.get("user_sub") as string | null;
  const title = formData.get("title") as string | null;
  const category = formData.get("category") as string | null;
  const genre = formData.get("genre") as string | null;
  const director = formData.get("director") as string | null;
  const year = formData.get("year") as string | null;
  const description = formData.get("description") as string | null;

  console.log({
    user_sub,
    title,
    category,
    genre,
    director,
    year,
    description,
  });

  if (
    !user_sub ||
    !title ||
    !category ||
    !genre ||
    !director ||
    !year ||
    !description
  ) {
    throw new Error("Missing required form data");
  }

  await sql`
        INSERT INTO entries (user_sub, title, category, genre, director, year, description)
        VALUES (${user_sub}, ${title}, ${category}, ${genre}, ${director}, ${year}, ${description})
      `;
};
