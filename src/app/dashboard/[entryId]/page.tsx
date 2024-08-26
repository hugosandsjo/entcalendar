"use client";

import { useEffect, useState } from "react";
import { getEntry } from "@/app/actions/actions";
import Link from "next/link";

export default function UpdateEntryPage({
  params,
}: {
  params: { entryId: number };
}) {
  const [entry, setEntry] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const data = await getEntry(params.entryId);
      setEntry(data);
    })();
  }, []);

  return (
    <section className="flex justify-center py-14">
      <div className="w-10/12 px-10 py-12 flex flex-col gap-4 border border-black">
        <Link href="/dashboard">
          {" "}
          <div className="hover:opacity-35">Back</div>
        </Link>
        <h1>Entry id: {params.entryId}</h1>
        {entry ? (
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl mb-2 leading-tight">{entry.title}</h1>
            <div className="flex gap-x-2 mb-2 text-1xl flex-wrap gap-y-2">
              {" "}
              <h2 className="border rounded-3xl py-1 px-2">{entry.category}</h2>
              <h2 className="border rounded-3xl py-1 px-2">{entry.author}</h2>
              <h2 className="border rounded-3xl py-1 px-2">{entry.director}</h2>
              <h2 className="border rounded-3xl py-1 px-2">{entry.year}</h2>
            </div>
            <p className="text-lg">{entry.description}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}

        <Link href={`/dashboard/${params.entryId}/edit`}>
          <button className="border hover:bg-sky-300 py-2 px-4 rounded-xl">
            Edit
          </button>
        </Link>
      </div>
    </section>
  );
}
