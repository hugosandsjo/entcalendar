"use client";

import React, { useRef, useEffect, useState } from "react";
import { updateEntry, getUpdateEntry } from "@/app/actions/actions";

import RadioButton from "@/app/components/RadioButton";
import FormInput from "@/app/components/FormInput";
import FormInputLarge from "@/app/components/FormInputLarge";
import FormMonth from "@/app/components/FormMonth";
import { EntryData } from "@/app/components/Entry";
import FormStar from "@/app/components/FormStar";

export default function EntryFormUpdate({ id }: { id: number }) {
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
    rating: 0,
  });
  const [month, setMonth] = useState<string>("");
  const [category, setCategory] = useState<string>("Book");

  useEffect(() => {
    (async () => {
      const data: EntryData = await getUpdateEntry(id);
      console.log(data);
      console.log(data.month);
      setEntry(data);
      setMonth(data?.month || ""); // Ensure the fetched month is set
      setCategory(data?.category || "Book");
    })();
  }, [id]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.defaultValue);
  };

  const handleMonthChange = (month: string) => {
    console.log("Month", month);
    setMonth(month);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);
    formData.set("month", month);

    try {
      await updateEntry(id, formData);
    } catch (error) {
      console.error("Error updating entry:", error);
    }
  };

  return (
    <>
      <section className="flex w-screen justify-center mb-12 p-8">
        <form
          ref={formRef}
          className="flex flex-col p-1 gap-y-2 "
          onSubmit={handleFormSubmit}
        >
          <h1 className="text-5xl mb-4">Update Entry</h1>
          <div className="flex gap-2 my-2 py-2">
            {["Book", "Movie", "Series", "Game"].map((formCategory) => (
              <RadioButton
                key={formCategory}
                category={formCategory}
                onChange={handleCategoryChange}
                checked={category === formCategory}
              />
            ))}
          </div>
          <div className="flex flex-col">
            <FormInput title="Title" name="title" defaultValue={entry.title} />
          </div>
          <article className="flex gap-4">
            <div className="flex flex-col">
              <FormMonth value={entry.month} onChange={handleMonthChange} />
            </div>
            <div className="flex flex-col">
              <FormInput title="Year" name="year" defaultValue={entry.year} />
            </div>
          </article>
          <article className="flex gap-4">
            <div className="flex flex-col">
              <FormInput
                title="Genre"
                name="genre"
                defaultValue={entry.genre}
              />
            </div>
          </article>
          <article className="flex gap-4 flex-wrap">
            {/* Conditionally render inputs based on category */}
            {category === "Book" && (
              <div className="flex flex-col">
                <FormInput
                  title="Author"
                  name="author"
                  defaultValue={entry.author}
                />
              </div>
            )}

            {(category === "Movie" || category === "Series") && (
              <>
                <div className="flex flex-col">
                  <FormInput
                    title="Director"
                    name="director"
                    defaultValue={entry.director}
                  />
                </div>
                <div className="flex flex-col">
                  <FormInput
                    title="Writer"
                    name="writer"
                    defaultValue={entry.writer}
                  />
                </div>
              </>
            )}

            {category === "Game" && (
              <>
                <div className="flex flex-col">
                  <FormInput
                    title="Publisher"
                    name="publisher"
                    defaultValue={entry.publisher}
                  />
                </div>
                <div className="flex flex-col">
                  <FormInput
                    title="Developer"
                    name="developer"
                    defaultValue={entry.developer}
                  />
                </div>
              </>
            )}
          </article>
          <FormStar />
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
