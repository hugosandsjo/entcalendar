"use client";

import React, { useRef, useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import RadioButton from "../components/RadioButton";
import { addEntry } from "../actions/actions";
import FormInput from "../components/FormInput";
import FormInputLarge from "./FormInputLarge";
import FormMonth from "./FormMonth";

function EntryForm() {
  const { user, isLoading } = useUser();
  const formRef = useRef<HTMLFormElement>(null);
  const [category, setCategory] = useState<string>("Book");

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

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

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
          className="flex flex-col p-1 gap-y-2 w-8/12"
          onSubmit={handleSubmit}
        >
          <h1 className="text-5xl mb-4">New Entry</h1>
          <FormMonth />
          <label htmlFor="category">Category</label>
          <div className="flex gap-2 my-2 py-2">
            {["Book", "Movie", "Series", "Game"].map((cat) => (
              <RadioButton
                key={cat}
                category={cat}
                onChange={handleCategoryChange}
                checked={category === cat}
              />
            ))}
          </div>
          <input type="hidden" id="user_sub" name="user_sub" required></input>
          <FormInput title="Title" name="title" />

          <FormInput title="Genre" name="genre" />

          <FormInput title="Year" name="year" />

          {/* Some conditional input fields depending on the category */}
          {category === "Book" && <FormInput title="Author" name="author" />}
          {(category === "Movie" || category === "Series") && (
            <>
              <FormInput title="Director" name="director" />
              <FormInput title="Writer" name="writer" />
            </>
          )}
          {category === "Game" && (
            <>
              <FormInput title="Publisher" name="publisher" />
              <FormInput title="Developer" name="developer" />
            </>
          )}
          <FormInputLarge title="Description" name="description" />
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
