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
      console.log(params.entryId);
      console.log("Page data:", data);
      setEntry(data);
    })();
  }, []);

  return (
    <section className="flex justify-center py-14">
      <div className="w-8/12 px-14 pt-12 pb-16 flex flex-col gap-4 border border-black h-96">
        <Link href="/dashboard">
          {" "}
          <div className="hover:opacity-35">Back</div>
        </Link>
        {entry ? (
          <div className="flex flex-col gap-1">
            <h1 className="text-7xl mb-2">{entry.title}</h1>
            <div className="flex gap-x-2 mb-2">
              <h2 className="text-3xl">{entry.category}</h2>
              <h2 className="text-3xl">{entry.author}</h2>
              <h2 className="text-3xl">{entry.director}</h2>
            </div>
            <p className="text-lg">{entry.description}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
}
