"use client";

import React, { useRef, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import RadioButton from "../components/RadioButton";
import { addEntry } from "../actions/actions";
import FormInput from "../components/FormInput";

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
      <section className="flex w-screen justify-center mb-12">
        <form
          ref={formRef}
          className="flex flex-col w-screen p-8  border gap-2"
          onSubmit={handleSubmit}
        >
          <h1 className="text-5xl mb-4">New Entry</h1>
          <label htmlFor="options">Month</label>
          <select className="p-4 border border-black" id="month" name="month">
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
          <div className="flex gap-2 my-2">
            <RadioButton category="Book" />
            <RadioButton category="Movie" />
            <RadioButton category="Series" />
            <RadioButton category="Game" />
          </div>
          <input type="hidden" id="user_sub" name="user_sub" required></input>
          <FormInput title="Title" name="title" />
          <FormInput title="Genre" name="genre" />
          <FormInput title="Director" name="director" />
          <FormInput title="Year" name="year" />
          <FormInput title="Description" name="description" />
          <button
            type="submit"
            className="mt-4 p-4 border border-black rounded-md bg-black text-white hover:opacity-60"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

export default EntryForm;
