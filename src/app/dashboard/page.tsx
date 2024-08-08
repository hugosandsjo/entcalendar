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
        <Month text="May"></Month>
        <EntryContainer month="may" />
        <Month text="July"></Month>
        <EntryContainer month="july" />
        <Month text="September"></Month>
        <EntryContainer month="september" />
        <Month text="September"></Month>
        <EntryContainer month="august" />
      </Main>
    </>
  );
}
