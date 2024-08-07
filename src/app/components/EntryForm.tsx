"use client";

import React, { useRef, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import RadioButton from "../components/RadioButton";
import { addEntry } from "../actions/actions";

function EntryForm() {
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
      <div className="flex w-screen justify-center mb-12">
        <form
          ref={formRef}
          className="flex flex-col p-12 bg-slate-400"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl">New Entry</h1>
          <label htmlFor="options">Month</label>
          <select id="month" name="month">
            <option value="january">January</option>
            <option value="february">February</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
          </select>
          <label htmlFor="category">Category</label>
          <RadioButton category="Book" />
          <RadioButton category="Movie" />
          <RadioButton category="Series" />
          <RadioButton category="Game" />
          <input type="hidden" id="user_sub" name="user_sub" required></input>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required></input>
          {/* <label htmlFor="category">Category</label> */}
          {/* <input type="text" id="category" name="category" required></input> */}
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

export default EntryForm;
