import EntryContainer from "../components/EntryContainer";
import Main from "../components/Main";
import ProfileClient from "../components/ProfileClient";
import Month from "../components/Month";

export default function Dashboard() {
  return (
    <>
      <Main>
        <ProfileClient />
        <Month text="January"></Month>
        <EntryContainer month="january" />
        <Month text="February"></Month>
        <EntryContainer month="february" />
        <Month text="March"></Month>
        <EntryContainer month="march" />
        <Month text="April"></Month>
        <EntryContainer month="april" />
        <Month text="May"></Month>
        <EntryContainer month="may" />
        <Month text="June"></Month>
        <EntryContainer month="june" />
        <Month text="July"></Month>
        <EntryContainer month="july" />
        <Month text="August"></Month>
        <EntryContainer month="august" />
        <Month text="September"></Month>
        <EntryContainer month="september" />
        <Month text="October"></Month>
        <EntryContainer month="october" />
        <Month text="November"></Month>
        <EntryContainer month="november" />
        <Month text="December"></Month>
        <EntryContainer month="december" />
      </Main>
    </>
  );
}
