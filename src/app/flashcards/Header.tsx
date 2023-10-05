"use client";

import React from "react";
import Data from "./Data.json";

function Header() {
  return (
    <header className="bg-slate-900 py-2 text-center sticky top-0 left-0 w-full z-50">
      <h1 className="text-yellow-500	uppercase text-2xl font-black hover:animate-jump">
        {Object.keys(Data).length + " "}BrainCards
      </h1>
    </header>
  );
}

export default Header;
