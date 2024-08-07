import React from "react";
import InfoTag from "./InfoTag";
import { deleteEntry } from "@/app/actions/actions";
import GenreTag from "./GenreTag";
import Link from "next/link";

export type EntryProps = {
  id: number;
  title: string;
  category: "Book" | "Movie" | "Series" | "Game";
  genre: string;
  year: number;
  description: string;
  month: string;
  author?: string;
  director?: string;
  writer?: string;
  publisher?: string;
  developer?: string;
  onDelete: (id: number) => void;
};

const handleDeleteClick = async (
  id: number,
  onDelete: (id: number) => void
) => {
  await deleteEntry(id);
  onDelete(id);
};

function Entry({
  id,
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
  onDelete,
}: EntryProps) {
  return (
    <div className="min-w-96 max-w-lg py-9 px-12 flex flex-col gap-4 justify-between border border-black">
      <div>
        <h1 className="text-4xl mb-3">{title}</h1>

        <div className="flex flex-col gap-1">
          <article className="flex gap-x-1">
            <InfoTag text={category} />
            <InfoTag text={year} />
            <InfoTag text={author} />
            <InfoTag text={director} />
            <InfoTag text={writer} />
            <InfoTag text={developer} />
            <InfoTag text={publisher} />
          </article>
          <article className="flex">
            <GenreTag text={genre} />
          </article>
        </div>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div className="flex gap-2 justify-between">
        <div>
          <button className="border hover:bg-sky-300 py-2 px-4 rounded-xl">
            Edit
          </button>
          <button
            className="border hover:bg-red-500 py-2 px-4 rounded-xl"
            onClick={() => handleDeleteClick(id, onDelete)}
          >
            Delete
          </button>
        </div>
        <div>
          <Link href={`dashboard/${id}`}>
            <h1>Go to entry</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Entry;
