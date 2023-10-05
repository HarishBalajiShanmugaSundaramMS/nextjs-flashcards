"use client";

import React, { useEffect } from "react";
import MasterFlashCard from "./flashcards/MasterFlashCard";
import Data from "./flashcards/Data.json";
import Footer from "./flashcards/Footer";
import Header from "./flashcards/Header";

export default function Home() {
  useEffect(() => {
    document.title = "🂺 BrainCards";
  }, []);

  Data.sort(function (a, b) {
    const sortTextA = a.english_singular.slice(2);
    const sortTextB = b.english_singular.slice(2);
    return sortTextA.localeCompare(sortTextB, undefined, {
      numeric: true,
      sensitivity: "base",
    });
  });

  const flashCard = Data.map((card) => {
    return (
      <div
        key={card.english_singular}
        className="bg-slate-950 m-0 min-w-[400px] min-h-[100px] sm:w-1/2	"
      >
        <MasterFlashCard Hindi_Singular={""} Hindi_Plural={""} {...card} />
      </div>
    );
  });

  return (
    <>
      <Header />
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-0 m-0		">
        {flashCard}
      </main>
      <Footer />
    </>
  );
}
