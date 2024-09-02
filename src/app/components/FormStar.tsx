import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function FormStar() {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);

  return (
    <>
      {" "}
      <h1>Rating</h1>
      <div className="flex">
        {[...Array(5)].map((_, index) => {
          const currentRating = index + 1;
          return (
            <label key={currentRating}>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                className="hidden"
                onClick={() => setRating(currentRating)}
              />
              <FaStar
                size={30}
                color={
                  currentRating <= (hover ?? rating ?? 0) ? "black" : "grey"
                }
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
    </>
  );
}
