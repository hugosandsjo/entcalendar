import EntryContainer from "@/app/components/EntryContainer";
import Main from "@/app/components/Main";
import ProfileClient from "@/app/components/ProfileClient";
import MonthHeading from "@/app/components/MonthHeading";
import { unstable_noStore as noStore } from "next/cache";

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

  return (
    <>
      <Main>
        <ProfileClient />
        {months.map((month) => (
          <div key={month}>
            <MonthHeading text={month} />
            <EntryContainer month={month.toLowerCase()} />
          </div>
        ))}
      </Main>
    </>
  );
}
