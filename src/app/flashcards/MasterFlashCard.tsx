"use client";

import React, { useState } from "react";
import { IN, GB, DE } from "country-flag-icons/react/3x2";

function MasterFlashCard(props: {
  image_url: string;
  gender: string;
  tamil_singular: string;
  english_singular: string;
  german_singular: string;
  tamil_plural: string;
  english_plural: string;
  german_plural: string;
  Hindi_Singular: string;
  Hindi_Plural: string;
}) {
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const [showFirstDiv, setShowFirstDiv] = useState(true);

  const handleFirstDivClick = () => {
    setShowSecondDiv(!showSecondDiv);
    setShowFirstDiv(false);
  };

  const handleSecondDivClick = () => {
    setShowFirstDiv(!showFirstDiv);
    setShowSecondDiv(false);
  };

  return (
    <div className="py-8 pb-2 md:shrink-0 bg-black">
      {showSecondDiv && (
        <div
          className="w-3/5 h-2/4 border-2 rounded-lg m-auto outline outline-black outline-offset-8 outline-4 bg-black grayscale-0 hover:grayscale-0 overflow-hidden min-w-[500px] min-h-[100px] max-w-[800px] max-h-[3/5]"
          onClick={handleSecondDivClick}
        >
          <div className="flex w-96 h-64 ">
            <img
              src={props.image_url}
              className="w-full h-full float-none p-2"
              alt={props.english_singular + " image"}
            />
            <div className="w-24 h-60 p-2 m-2	ml-4 flex-grow flex justify-center items-center uppercase text-4xl">
              <div className="rotate-90 items-center justify-center text-slate-500 font-black right-10 ">
                {props.gender === "Feminine" ? (
                  <span className="text-pink-500">{props.gender}</span>
                ) : props.gender === "Masculine" ? (
                  <span className="text-blue-500">{props.gender}</span>
                ) : (
                  <span className="text-white">{props.gender}</span>
                )}
              </div>
            </div>
          </div>
          <div>
            <table className="table-auto border-separate border-spacing-2 w-full">
              <tbody>
                <tr>
                  <th className="items-center text-2xl border border-slate-600 text-left text-yellow-500 font-black	uppercase bg-sky-950">
                    <div className="flex justify-between">
                      <div>Tamil</div>
                      <IN title="India" className="w-6 m-2" />
                    </div>
                  </th>
                  <th className="text-2xl border border-slate-600 text-left text-yellow-500 font-black uppercase bg-sky-950">
                    <div className="flex justify-between">
                      <div className="font-black">English</div>
                      <GB title="Britain" className="w-6 m-2" />
                    </div>
                  </th>
                  <th className="text-2xl border border-slate-600 text-left text-yellow-500 font-black uppercase bg-sky-950">
                    <div className="flex justify-between">
                      <div>German</div>
                      <DE title="Germany" className="w-6 m-2" />{" "}
                    </div>{" "}
                  </th>
                </tr>
                <tr>
                  <td className="border border-slate-700 text-l text-white">
                    {props.tamil_singular}
                  </td>
                  <td className="border border-slate-700 text-l text-white">
                    {"the | " + props.english_singular}
                  </td>
                  <td className="border border-slate-700 text-l text-white">
                    {props.german_singular.startsWith("die ")
                      ? props.german_singular.replace("die ", "die | eine ")
                      : props.german_singular.startsWith("der ")
                      ? props.german_singular.replace("der ", "der | ein ")
                      : props.german_singular.startsWith("das ")
                      ? props.german_singular.replace("das ", "das | ein ")
                      : props.german_singular}
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-700 text-l text-white">
                    {props.tamil_plural}
                  </td>
                  <td className="border border-slate-700 text-l text-white">
                    {"the " + props.english_plural}
                  </td>
                  <td className="border border-slate-700 text-l text-white">
                    {props.german_plural}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      <div>
        {showFirstDiv && (
          <div
            className="w-3/5 h-2/4 p-0	m-0	border-2 rounded-lg outline outline-black outline-offset-8 outline-4 bg-black overflow-hidden min-w-[500px] min-h-[100px] max-w-[800px] max-h-[3/5]"
            onClick={handleFirstDivClick}
          >
            <img
              src={props.image_url}
              className="w-full h-full float-none grayscale hover:grayscale-0"
              alt={props.english_singular + " image"}
            />
            <div className="text-5xl border text-center text-yellow-500 font-black uppercase bg-slate-900">
              {props.english_singular.slice(2)}
            </div>
          </div>
        )}
      </div>
      <br></br>
    </div>
  );
}

export default MasterFlashCard;
