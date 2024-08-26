import React from "react";
import { FaStar } from "react-icons/fa";

type StarTagProps = {
  rating: number | undefined;
};

export default function RatingTag({ rating = 0 }: StarTagProps) {
  return (
    <div className="flex items-center gap-1">
      {/* Render stars based on rating */}
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          size={24}
          color={index < rating ? "black" : "grey"}
        />
      ))}
    </div>
  );
}
