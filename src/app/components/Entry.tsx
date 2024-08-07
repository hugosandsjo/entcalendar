import React from "react";
import InfoTag from "./InfoTag";
import { deleteEntry } from "../actions/actions";
import { ClassNames } from "@emotion/react";

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
  onDelete, // Add the onDelete function as a prop
}: EntryProps & { onDelete: (id: number) => void }) {
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
      <button className="border" onClick={() => handleClick(id, onDelete)}>
        Delete
      </button>
    </div>
  );
}

export default Entry;
