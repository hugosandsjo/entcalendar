import React from "react";
import { ReactNode } from "react";
import EntryContainer from "./EntryContainer";
import Month from "./Month";
import ProfileClient from "./ProfileClient";

type MainProps = {
  children: ReactNode;
};

function Main({ children }: MainProps) {
  return (
    <main className="p-10 flex flex-col gap-10">
      <ProfileClient />
      <Month text="May"></Month>
      <EntryContainer />
      <Month text="July"></Month>
      <EntryContainer />
      <Month text="September"></Month>
      <EntryContainer />
    </main>
  );
}

export default Main;
