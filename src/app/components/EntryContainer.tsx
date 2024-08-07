"use client";

import React from "react";
import Entry, { EntryProps } from "./Entry";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

type EntryContainerProps = {
  month: string;
};

function EntryContainer({ month }: EntryContainerProps) {
  const { user, isLoading } = useUser();
  const [entries, setEntries] = useState<EntryProps[]>([]);

  useEffect(() => {
    const getEntries = async () => {
      if (user) {
        try {
          const response = await fetch(`/dashboard/api?userSub=${user.sub}`);
          const data = await response.json();
          setEntries(data.rows);
        } catch (error) {
          console.error("Error fetching entries:", error);
        }
      }
    };
    getEntries();
  }, [user]);

  const handleDelete = (id: number) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please log in to see your entries.</div>;
  }

  const filteredEntries = entries.filter((entry) => entry.month === month);

  return (
    <section className="relative -left-12 w-full">
      <div className="flex w-[calc(100%+6rem)] gap-6 overflow-x-auto first:pl-10 last:pr-10 scrollbar-hide">
        {filteredEntries.map((entry) => (
          <Entry
            key={entry.id}
            id={entry.id}
            title={entry.title}
            category={entry.category}
            genre={entry.genre}
            director={entry.director}
            year={entry.year}
            description={entry.description}
            month={entry.month}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </section>
  );
}

export default EntryContainer;
