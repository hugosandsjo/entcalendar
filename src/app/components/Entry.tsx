import React from "react";
import InfoTag from "./InfoTag";
import { deleteEntry } from "../actions/actions";

export type EntryProps = {
  id: number;
  title: string;
  category: string;
  genre: string;
  director?: string;
  year: number;
  publisher?: string;
  description: string;
  onDelete: (id: number) => void;
};

const handleClick = async (id: number, onDelete: (id: number) => void) => {
  await deleteEntry(id);
  onDelete(id);
};

function Entry({
  id,
  title,
  category,
  genre,
  director,
  year,
  publisher,
  description,
  onDelete,
}: EntryProps) {
  return (
    <div className="min-w-96 p-6 flex flex-col gap-4 justify-between border border-black rounded-sm ">
      <div>
        <h1 className="text-4xl mb-2">{title}</h1>
        <div className="flex flex-row gap-1">
          <InfoTag text={category} />
          <InfoTag text={genre} />
          <InfoTag text={director} />
          <InfoTag text={year} />
          <InfoTag text={publisher} />
        </div>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <button
        className="border hover:bg-sky-300"
        onClick={() => handleClick(id, onDelete)}
      >
        Delete
      </button>
    </div>
  );
}

export default Entry;
