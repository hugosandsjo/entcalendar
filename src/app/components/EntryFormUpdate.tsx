"use client";

import React, { useRef, useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { updateEntry, getUpdateEntry } from "@/app/actions/actions";

import RadioButton from "@/app/components/RadioButton";
import FormInput from "@/app/components/FormInput";
import FormInputLarge from "@/app/components/FormInputLarge";
import FormMonth from "@/app/components/FormMonth";
import { EntryProps, EntryData } from "@/app/components/Entry";

export default function EntryFormUpdate({ id }: { id: number }) {
  const { user, isLoading } = useUser();
  const formRef = useRef<HTMLFormElement>(null);
  const [entry, setEntry] = useState<EntryData>({
    id: 0,
    title: "",
    genre: "",
    year: 0,
    category: "Book",
    month: "",
    author: "",
    director: "",
    writer: "",
    publisher: "",
    developer: "",
    description: "",
  });
  const [category, setCategory] = useState<string>("Book");

  useEffect(() => {
    (async () => {
      const data: EntryData = await getUpdateEntry(id);
      console.log(data);
      console.log(data.year);
      setEntry(data);
      setCategory(data?.category || "Book"); // Set category based on fetched entry
    })();
  }, [id]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.defaultValue);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);
    try {
      await updateEntry(id, formData);
    } catch (error) {
      console.error("Error updating entry:", error);
    }
  };

  return (
    <>
      <section className="flex w-screen justify-center mb-12">
        <form
          ref={formRef}
          className="flex flex-col p-1 gap-y-2 w-8/12"
          onSubmit={handleFormSubmit} // Use onSubmit to handle form submission
        >
          <h1 className="text-5xl mb-4">Update Entry</h1>
          <FormMonth defaultValue={entry?.month} />
          <label htmlFor="category">Category</label>
          <div className="flex gap-2 my-2 py-2">
            {["Book", "Movie", "Series", "Game"].map((formCategory) => (
              <RadioButton
                key={formCategory}
                category={formCategory}
                onChange={handleCategoryChange}
                checked={category === formCategory} // Set checked based on state
              />
            ))}
          </div>
          <input
            type="hidden"
            id="user_sub"
            name="user_sub"
            defaultValue={user?.sub ?? ""}
            required
          />
          <FormInput title="Title" name="title" defaultValue={entry.title} />
          <FormInput title="Genre" name="genre" defaultValue={entry.genre} />
          <FormInput title="Year" name="year" defaultValue={entry.year} />

          {/* Conditionally render inputs based on category */}
          {category === "Book" && (
            <FormInput
              title="Author"
              name="author"
              defaultValue={entry.author}
            />
          )}
          {(category === "Movie" || category === "Series") && (
            <>
              <FormInput
                title="Director"
                name="director"
                defaultValue={entry.director}
              />
              <FormInput
                title="Writer"
                name="writer"
                defaultValue={entry.writer}
              />
            </>
          )}
          {category === "Game" && (
            <>
              <FormInput
                title="Publisher"
                name="publisher"
                defaultValue={entry.publisher}
              />
              <FormInput
                title="Developer"
                name="developer"
                defaultValue={entry.developer}
              />
            </>
          )}
          <FormInputLarge
            title="Description"
            name="description"
            defaultValue={entry?.description}
          />
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
