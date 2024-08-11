"use client";

import React, { useState, useEffect } from "react";
import Entry, { EntryProps } from "@/app/components/Entry";

type EntryContainerProps = {
  month: string;
  entries: EntryProps[];
};

function EntryContainer({ month, entries }: EntryContainerProps) {
  // const [entries, setEntries] = useState<EntryProps[]>([]);
  const [filteredEntries, setFilteredEntries] = useState<EntryProps[]>(entries); // Renamed to filteredEntries

  useEffect(() => {
    setFilteredEntries(entries.filter((entry) => entry.month === month));
  }, [entries, month]); // Update filteredEntries when entries or month changes

  const handleDelete = (id: number) => {
    setFilteredEntries(filteredEntries.filter((entry) => entry.id !== id)); // Update usage to filteredEntries
  };

  return (
    <section className="relative -left-12 ">
      <div className="flex w-[calc(100%+6rem)] gap-6 overflow-x-auto first:pl-10 last:pr-10 scrollbar-hide">
        {filteredEntries.map((entry) => (
          <Entry
            key={entry.id}
            id={entry.id}
            title={entry.title}
            category={entry.category}
            year={entry.year}
            genre={entry.genre}
            author={entry.author}
            director={entry.director}
            writer={entry.writer}
            description={entry.description}
            publisher={entry.publisher}
            developer={entry.developer}
            month={entry.month}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </section>
  );
}

export default EntryContainer;
