"use client";

import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaUnsplash } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-slate-900	text-stone-500 py-2 text-center fixed bottom-0 left-0 w-full ">
      <div className="flex">
        <BsGithub
          className="basis-1/4 w-6 h-6 hover:fill-yellow-500 hover:animate-jump"
          onClick={() => {
            window.open(
              "https://github.com/HarishBalajiShanmugaSundaramMS/nextjs-flashcards",
              "_blank"
            );
          }}
        ></BsGithub>
        <BsLinkedin
          className="basis-1/4 w-6 h-6 hover:fill-yellow-500 hover:animate-jump"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/harishbalajisms/",
              "_blank"
            );
          }}
        ></BsLinkedin>
        <FaUnsplash
          className="basis-1/4 w-6 h-6 hover:fill-yellow-500 hover:animate-jump"
          title="Unsplash"
          onClick={() => {
            window.open("https://www.unsplash.com", "_blank");
          }}
          style={{ cursor: "pointer" }}
        />
        <SiTailwindcss
          className="basis-1/4 w-6 h-6 hover:fill-yellow-500 hover:animate-jump"
          title="Tailwind CSS"
          onClick={() => {
            window.open("https://tailwindcss.com/", "_blank");
          }}
        />
      </div>
    </footer>
  );
}

export default Footer;
