import React from "react";

type MonthProps = {
  text: string;
};

export default function Month({ text }: MonthProps) {
  return (
    <>
      <h1 className="text-6xl mb-8">{text}</h1>
    </>
  );
}
