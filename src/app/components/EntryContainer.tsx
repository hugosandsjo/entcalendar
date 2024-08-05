"use client";

import React from "react";
import Entry, { EntryProps } from "./Entry";
import { useEffect, useState } from "react";
// import { fetchEntries } from "@/app/lib/data";
import { useUser } from "@auth0/nextjs-auth0/client";

function EntryContainer() {
  const { user, isLoading } = useUser();
  const [entries, setEntries] = useState<EntryProps[]>([]);
  const [loadingEntries, setLoadingEntries] = useState(true);

  useEffect(() => {
    const getEntries = async () => {
      if (user) {
        console.log("User sub:", user.sub);
        // console.log("User object:", user);
        try {
          const response = await fetch(`/api/entries?userSub=${user.sub}`);
          const data = await response.json();
          console.log("API Response:", data);
          setEntries(data.rows);
        } catch (error) {
          console.error("Error fetching entries:", error);
        }
        setLoadingEntries(false);
      }
    };

    getEntries();
  }, [user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please log in to see your entries.</div>;
  }

  return (
    <section className="relative -left-12 w-full">
      <div className="flex w-[calc(100%+6rem)] gap-6 overflow-x-auto first:pl-10 last:pr-10 scrollbar-hide">
        {entries.map((entry) => (
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
