import EntryContainer from "@/app/components/EntryContainer";
import Main from "@/app/components/Main";
import ProfileClient from "@/app/components/ProfileClient";
import MonthHeading from "@/app/components/MonthHeading";
import { getEntries } from "@/app/actions/actions";
import { unstable_noStore as noStore } from "next/cache";
import { EntryProps } from "@/app/components/Entry";
import { getSession } from "@auth0/nextjs-auth0";

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

export default async function Dashboard() {
  noStore();

  const session = await getSession();
  const { user } = session || {};

  if (!user) {
    return <div>Please log in to see your entries.</div>;
  }

  const data = await getEntries(user.sub);
  console.log("Data", data);

  const entries = Array.isArray(data) ? (data as EntryProps[]) : [];
  console.log("Entries", entries);

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
