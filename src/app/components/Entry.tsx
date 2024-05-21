import React from "react";
import InfoTag from "./InfoTag";

type EntryProps = {
  title: string;
  category: string;
  genre: string;
  director?: string;
  year: number;
  publisher?: string;
  description: string;
};

function Entry({
  title,
  category,
  genre,
  director,
  year,
  publisher,
  description,
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
    </div>
  );
}

export default Entry;
