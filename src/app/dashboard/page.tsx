"use client";

import EntryContainer from "@/app/components/EntryContainer";
import Main from "@/app/components/Main";
import ProfileClient from "@/app/components/ProfileClient";
import MonthHeading from "@/app/components/MonthHeading";
import { getEntries } from "@/app/actions/actions";
import { unstable_noStore as noStore } from "next/cache";
import { useEffect, useState } from "react";
import { EntryProps } from "@/app/components/Entry";
import { useUser } from "@auth0/nextjs-auth0/client";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Dashboard() {
  noStore();

  const { user, isLoading } = useUser();
  const [entries, setEntries] = useState<EntryProps[]>([]);

  useEffect(() => {
    (async () => {
      if (user) {
        const data = await getEntries(user.sub);
        console.log(user.sub);
        console.log("Page data:", data);
        setEntries(data as EntryProps[]);
      }
    })();
  }, [user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please log in to see your entries.</div>;
  }

  return (
    <>
      <Main>
        <ProfileClient />
        {months.map((month) => (
          <div key={month}>
            <MonthHeading text={month} />
            <EntryContainer month={month.toLowerCase()} entries={entries} />
          </div>
        ))}
      </Main>
    </>
  );
}
