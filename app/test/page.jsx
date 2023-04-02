"use client";
import React from "react";

const Test = () => {
  const domain = "http://127.0.0.1:8000";
  const filteredAds = (queryPrametrs) => {
    const queryString = [];
    queryPrametrs.forEach((el) => {
      const query = `${el.param}=${el.value}`;
      queryString.push(query);
    });
    console.log(queryString);
    return queryString.join("&");
  };
  return (
    <div>
      <button
        onClick={() =>
          console.log(
            filteredAds([
              { param: "category", value: 1 },
              { param: "city", value: 2 },
              { param: "is_urgent", value: true },
              { param: "is_ladder", value: false },
              { param: "has_image", value: true },
            ])
          )
        }
      >
        salam
      </button>
    </div>
  );
};

export default Test;
