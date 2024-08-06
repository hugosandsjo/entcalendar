import { sql } from "@vercel/postgres";
import EntryContainer from "../components/EntryContainer";

export default function New() {
  // const genres = ["Action", "Adventure", "Comedy", "Drama", "Fantasy"];

  const addEntry = async (formData: FormData) => {
    "use server";

    const title = formData.get("title") as string | null;
    const category = formData.get("category") as string | null;
    const genre = formData.get("genre") as string | null;
    const director = formData.get("director") as string | null;
    const year = formData.get("year") as string | null;
    const description = formData.get("description") as string | null;

    if (!title || !category || !genre || !director || !year || !description) {
      throw new Error("Missing required form data");
    }

    await sql`
      INSERT INTO entries (title, category, genre, director, year, description)
      VALUES (${title}, ${category}, ${genre}, ${director}, ${year}, ${description})
    `;
  };

  return (
    <>
      <h1>New Entry</h1>
      <div className="flex-col w-screen bg-slate-400">
        <form className="flex flex-col p-8" action={addEntry}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required></input>

          <label htmlFor="category">Category</label>
          <input type="text" id="category" name="category" required></input>

          <label htmlFor="genre">Genre</label>
          <input type="text" id="genre" name="genre" required></input>

          <label htmlFor="director">Director</label>
          <input type="text" id="director" name="director" required></input>

          <label htmlFor="year">Year</label>
          <input type="text" id="year" name="year" required></input>

          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            required
          ></input>
          {/* <fieldset>
            <legend>Genre</legend>
            {genres.map((genre) => (
              <div key={genre}>
                <input type="checkbox" id={genre} name="genre" value={genre} />
                <label htmlFor={genre}>{genre}</label>
              </div>
            ))}
          </fieldset> */}
          <button type="submit" className="mt-4 p-2 bg-blue-500 text-white">
            Submit
          </button>
        </form>
      </div>
      <EntryContainer />
    </>
  );
}
