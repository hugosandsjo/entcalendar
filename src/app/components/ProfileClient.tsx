"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";
import { fetchEntries } from "../lib/data";

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();
  const [entries, setEntries] = useState([]);

  // useEffect(() => {
  //   async function loadEntries() {
  //     if (!isLoading && user) {
  //       try {
  //         const userData = await fetchEntries(user.sub); // Using user's sub as identifier
  //         setEntries(userData);
  //       } catch (error) {
  //         console.error("Failed to load entries:", error.message);
  //       }
  //     }
  //   }

  //   loadEntries();
  // }, [isLoading, user]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <img src={user.picture ?? ""} alt={user.name ?? ""} />
        <h2>{`Welcome ${user.name}!`}</h2>
        <p>{user.email}</p>
        <p>{user.sub}</p>
      </div>
    )
  );
}
