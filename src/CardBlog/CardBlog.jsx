import React from "react";
import { FooterCard } from "./components/FooterCard";

export const CardBlog = () => {
  return (
    <>
      <div className="container mx-auto grid content-center h__full w-card">
        <div
          className="bg-white mx-auto rounded-3xl"
          style={{
            boxShadow: "hsl(0, 0%, 7%) 10px 7px 2px 1px",
            border: "2px solid hsl(0, 0%, 7%)",
          }}
        >
          <img
            className="img-card"
            src="/src/assets/images/illustration-article.svg"
            alt="img-card"
          />

          <span className="ml-5 mt-4 inline-block bg-tag text-tag rounded px-4 py-1 font-extrabold">
            Learning
          </span>

          <span className="ml-5 block mt-3 text-black font-medium">
                Public 21 Dec 2023
          </span>

          <h2 className="text-xl ml-5 my-3 hover:">
            HTML & CSS foundations
          </h2>

          <p className="px-5 text-base block mb-2">
          These languages are the backbone of every website, defining structure, content, and presentation.
          </p>


<FooterCard />

        </div>
      </div>
    </>
  );
};
