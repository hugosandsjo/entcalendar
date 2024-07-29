import React from "react";
import Entry from "./Entry";
import { fetchEntries } from "@/app/lib/data";

async function EntryContainer() {
  const entries = await fetchEntries();
  console.log(entries.rows);

  return (
    <section className="relative -left-12 w-full">
      <div className="flex w-[calc(100%+6rem)] gap-6 overflow-x-auto first:pl-10 last:pr-10 scrollbar-hide">
        {entries.rows.map((entry) => (
          <Entry
            key={entry.id}
            title={entry.title}
            category={entry.category}
            genre={entry.genre}
            director={entry.director}
            year={entry.year}
            description={entry.description}
          />
        ))}
      </div>
    </section>
  );
}

export default EntryContainer;
