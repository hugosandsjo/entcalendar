"use client";

import { useEffect, useState } from "react";
import { getEntry } from "@/app/actions/actions";

export default function UpdateEntryPage({
  params,
}: {
  params: { entryId: number };
}) {
  const [entry, setEntry] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const data = await getEntry(params.entryId);
      console.log(params.entryId);
      console.log("Page data:", data);
      setEntry(data);
    })();
  }, []);

  return (
    <>
      <h1>{params.entryId}</h1>
      {entry ? (
        <div>
          <h1>{entry.title}</h1>
          <p>{entry.category}</p>
          <p>{entry.description}</p>
          <p>{entry.author}</p>
          <p>{entry.director}</p>
        </div>
      ) : (
        <p>Loading...</p> // Display a loading state until data is fetched
      )}

      {/* <p>{entry.year}</p> */}
    </>
  );
}
