import React from "react";

type InfoTagProps = {
  text?: string | number;
};

function InfoTag({ text }: InfoTagProps) {
  return (
    <div>
      <h3 className="text-xl">{text}</h3>
    </div>
  );
}

export default InfoTag;
