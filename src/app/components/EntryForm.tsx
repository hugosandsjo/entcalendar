"use client";

import React, { useRef, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { addEntry } from "../actions/actions";

export default function EntryForm() {
  const { user, isLoading } = useUser();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (user && formRef.current) {
      const userSubInput =
        formRef.current.querySelector<HTMLInputElement>("#user_sub");
      if (userSubInput) {
        userSubInput.value = user.sub ?? "";
      }
    }
  }, [user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please log in to submit an entry.</div>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      await addEntry(formData);
      formRef.current.reset();
    }
  };

  return (
    <>
      <h1>New Entry</h1>
      <div className="flex-col w-screen bg-slate-400">
        <form
          ref={formRef}
          className="flex flex-col p-8"
          onSubmit={handleSubmit}
        >
          <input type="hidden" id="user_sub" name="user_sub" required></input>

          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required></input>

          <label htmlFor="category">Category</label>
          <input type="text" id="category" name="category" required></input>

          <label htmlFor="genre">Genre</label>
          <input type="text" id="genre" name="genre" required></input>

          <label htmlFor="director">Director</label>
          <input type="text" id="director" name="director" required></input>

          <label htmlFor="year">Year</label>
          <input type="text" id="year" name="year" required></input>

          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            required
          ></input>
          <button type="submit" className="mt-4 p-2 bg-blue-500 text-white">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
