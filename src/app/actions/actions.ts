"use server";

import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { EntryData } from "@/app/components/Entry";

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

export const getEntries = async (userSub: string | null | undefined) => {
  try {
    if (!userSub) {
      throw new Error("User sub is required to fetch entries.");
    }

    const result = await sql`
      SELECT * FROM entries WHERE user_sub = ${userSub}
    `;

    const entries = result.rows;
    console.log("This is a test", entries);
    return entries;
  } catch (error) {
    console.error("Error fetching entries:", error);
    return { success: false, error: "Failed to fetch entries." };
  }
};

export const getEntry = async (id: number) => {
  const result = await sql`SELECT * FROM entries WHERE id = ${id}`;
  const entries = result.rows;
  return entries[0];
};

export const getUpdateEntry = async (id: number): Promise<EntryData> => {
  const result = await sql`SELECT * FROM entries WHERE id = ${id}`;
  const entry = result.rows[0];

  console.log("getUpdateEntry", entry);

  return {
    id: entry.id,
    title: entry.title,
    category: entry.category,
    genre: entry.genre,
    year: entry.year,
    description: entry.description,
    author: entry.author,
    director: entry.director,
    writer: entry.writer,
    publisher: entry.publisher,
    developer: entry.developer,
    month: entry.month,
  };
};

export const updateEntry = async (id: number, formData: FormData) => {
  const title = formData.get("title") as string | null;
  const category = formData.get("category") as string | null;
  const genre = formData.get("genre") as string | null;
  const year = formData.get("year") as number | null;
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

  if (!title || !category || !genre || !year || !description || !month) {
    throw new Error("Missing required form data");
  }

  await sql`
  UPDATE entries
  SET
    title = ${title},
    category = ${category},
    genre = ${genre},
    year = ${year},
    description = ${description},
    month = ${month},
    author = ${author},
    director = ${director},
    writer = ${writer},
    publisher = ${publisher},
    developer = ${developer}
  WHERE id = ${id}
`;

  redirect("/dashboard");
};

export const deleteEntry = async (id: number) => {
  await sql`DELETE FROM entries WHERE id = ${id}`;
};
