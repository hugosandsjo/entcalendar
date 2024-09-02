import EntryContainer from "@/app/components/EntryContainer";
import Main from "@/app/components/Main";
import ProfileClient from "@/app/components/ProfileClient";
import MonthHeading from "@/app/components/MonthHeading";
import { getEntries } from "@/app/actions/actions";
import { unstable_noStore as noStore } from "next/cache";
import { EntryProps } from "@/app/components/Entry";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Dashboard() {
  noStore();

  const session = await getSession();
  const { user } = session || {};

  const monthOrder = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (!user) {
    return <div>Please log in to see your entries.</div>;
  }

  const data = await getEntries(user.sub);
  console.log("Data:", data);

  const entries = Array.isArray(data) ? (data as EntryProps[]) : [];

  const uniqueMonths = Array.from(
    new Set(entries.map((entry) => entry.month.toLowerCase()))
  ).sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b));

  console.log("Sorted Unique Months:", uniqueMonths);

  return (
    <>
      <Main>
        <ProfileClient />
        {uniqueMonths.map((month) => (
          <div key={month}>
            <MonthHeading text={capitalizeFirstLetter(month)} />
            <EntryContainer
              month={month}
              entries={entries.filter(
                (entry) => entry.month.toLowerCase() === month
              )} // Filter entries for this month
            />
          </div>
        ))}
      </Main>
    </>
  );
}
