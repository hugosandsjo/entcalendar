import React from "react";

type InfoTagProps = {
  text?: string | number;
};

function InfoTag({ text }: InfoTagProps) {
  return (
    <div className="">
      <h3 className="text-4l">{text}</h3>
    </div>
  );
}

export default InfoTag;
