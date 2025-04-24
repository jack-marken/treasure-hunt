import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import supabase from "./supabaseClient";
import { BsMap } from "react-icons/bs";
import { RiTreasureMapFill } from "react-icons/ri";
import { MdOutlineQuestionMark } from "react-icons/md";

export default function App() {
  return (
    <div className="h-dvh pt-3 px-6 bg-emerald-800">
      <header className="fixed top-8 right-8 left-8 text-white text-4xl">
        <ul className="flex justify-between">
          <li><RiTreasureMapFill /></li>
          <li>1/2</li>
          <li><MdOutlineQuestionMark /></li>
        </ul>
      </header>
      <div className="">
        <h1>HEY</h1>
        <div className="flex justify-center">
        </div>
      </div>
      <div className="fixed right-8 bottom-8 left-8">
        <button className="flex items-center justify-center w-full h-16 rounded-md bg-gray-200 text-xl shadow-solid">
          I'VE GOT IT
        </button>
      </div>
    </div>
  );
}

// <div className="flex justify-between mb-12 mx-4 py-4 px-6 w-full h-36 rounded-lg bg-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
//   <Link to="adventure">
//   </Link>
// </div>
