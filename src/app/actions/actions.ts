"use server";

import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const addEntry = async (formData: FormData) => {
  const user_sub = formData.get("user_sub") as string | null;
  const title = formData.get("title") as string | null;
  const category = formData.get("category") as string | null;
  const genre = formData.get("genre") as string | null;
  const year = formData.get("year") as string | null;
  const description = formData.get("description") as string | null;
  const month = formData.get("month") as string | null;

  let author = null;
  let director = null;
  let writer = null;
  let publisher = null;
  let developer = null;

  if (category === "Book") {
    author = formData.get("author") as string | null;
  } else if (category === "Movie" || category === "Series") {
    director = formData.get("director") as string | null;
    writer = formData.get("writer") as string | null;
  } else if (category === "Game") {
    publisher = formData.get("publisher") as string | null;
    developer = formData.get("developer") as string | null;
  }

  console.log("Submitted form data:", {
    user_sub,
    title,
    category,
    genre,
    year,
    description,
    month,
    author,
    director,
    writer,
    publisher,
    developer,
  });

  if (
    !user_sub ||
    !title ||
    !category ||
    !genre ||
    !year ||
    !description ||
    !month
  ) {
    throw new Error("Missing required form data");
  }

  await sql`
    INSERT INTO entries (
      user_sub, title, category, genre, year, description, month,
      author, director, writer, publisher, developer
    ) VALUES (
      ${user_sub}, ${title}, ${category}, ${genre}, ${year}, ${description}, ${month},
      ${author}, ${director}, ${writer}, ${publisher}, ${developer}
    )
  `;

  redirect("/dashboard");
};

export const UpdateEntry = async (id: number) => {};

export const deleteEntry = async (id: number) => {
  await sql`DELETE FROM entries WHERE id = ${id}`;
};
