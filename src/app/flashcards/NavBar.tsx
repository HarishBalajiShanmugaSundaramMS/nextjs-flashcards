import React from 'react';
import { FaDownload } from "react-icons/fa";


const NavBar = () => {
  return (
    <aside className="bg-slate-900 text-gray-700 w-24 min-h-screen p-4 fixed top-0 left-0 y-50">
      {/* Sidebar content goes here */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button><FaDownload className="hover:fill-cyan-700"></FaDownload></button>
      <ul>
      </ul>
    </aside>);
};

export default NavBar;
