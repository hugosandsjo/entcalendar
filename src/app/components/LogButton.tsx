"use client";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

function LogButton() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {user ? (
        <button className="border p-2 hover:bg-slate-400">
          <a href="/api/auth/logout">Logout</a>
        </button>
      ) : (
        <button className="border p-2 hover:bg-slate-400">
          <a href="/api/auth/login">Login</a>
        </button>
      )}
    </>
  );
}

export default LogButton;
