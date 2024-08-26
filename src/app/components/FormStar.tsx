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
          const currentRate = index + 1;
          return (
            <label key={currentRate}>
              <input
                type="radio"
                name="rate"
                value={currentRate}
                className="hidden"
                onClick={() => setRating(currentRate)}
              />
              <FaStar
                size={30}
                color={currentRate <= (hover ?? rating ?? 0) ? "black" : "grey"}
                onMouseEnter={() => setHover(currentRate)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
    </>
  );
}
