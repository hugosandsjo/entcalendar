import React from "react";
import InfoTag from "./InfoTag";
import { deleteEntry, updateEntry } from "@/app/actions/actions";
import GenreTag from "./GenreTag";
import Link from "next/link";
import RatingTag from "@/app/components/RatingTag";

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
  rating?: number;
  onDelete: (id: number) => void;
  onUpdate: (id: number) => void;
};

export type EntryData = Omit<EntryProps, "onDelete" | "onUpdate">;

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
  rating,
  onDelete,
  onUpdate,
}: EntryProps) {
  return (
    <div className="min-w-96 max-w-lg py-9 px-12 flex flex-col gap-4 justify-between border border-black">
      <div>
        <h1 className="text-4xl mb-3">{title}</h1>

        <div className="flex flex-col gap-2">
          <article className="flex flex-wrap gap-x-1">
            <InfoTag text={category} />
            <InfoTag text={year} />
            <InfoTag text={author} />
            <InfoTag text={director} />
            <InfoTag text={writer} />
            <InfoTag text={developer} />
            <InfoTag text={publisher} />
            <RatingTag rating={rating} />
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
        <div className="flex gap-x-2">
          <button
            className="border hover:bg-red-500 py-2 px-4 rounded-xl"
            onClick={() => handleDeleteClick(id, onDelete)}
          >
            Delete
          </button>
        </div>
        <div className="flex">
          <Link href={`dashboard/${id}`}>
            <button className="border hover:bg-green-700 py-2 px-4 rounded-xl">
              Go to entry
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Entry;
