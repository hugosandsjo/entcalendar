import React from "react";

type InfoTagProps = {
  text?: string | number;
};

export default function InfoTag({ text }: InfoTagProps) {
  return (
    <div>
      <h3 className="text-lg">{text}</h3>
    </div>
  );
}
