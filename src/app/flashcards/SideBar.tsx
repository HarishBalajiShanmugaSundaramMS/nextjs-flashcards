import React from "react";

function SideBar() {
  return (
    <aside className="bg-slate-900 w-64 min-h-screen p-4 fixed top-0 left-0 y-50 pt-5 text-yellow-500 font-black">
      <a href="#gallerymode" className="py-1.5">
        Gallery Mode
      </a>
      <a href="#learningmode" className="py-1.5">
        Learning Mode
      </a>
      <a href="#testmode" className="py-1.5">
        Test Mode
      </a>
      <a href="#categories" className="py-1.5 hover:animate-jump">
        Categories
      </a>
    </aside>
  );
}

export default SideBar;
