// import dotenv from "dotenv";
// dotenv.config({ path: ".env" }); // Ensure the path is correct if your .env file is named differently or located elsewhere

console.log("POSTGRES_URL:", process.env.POSTGRES_URL);

import EntryContainer from "./components/EntryContainer";
import Main from "./components/Main";

export default function Home() {
  return (
    <>
      <Main>
        <EntryContainer />
      </Main>
    </>
  );
}
