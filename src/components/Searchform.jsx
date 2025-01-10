import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";

export default function Searchform() {
  return (
    <div className="w-full flex h-screen items-center justify-center px-4 sm:px-10 lg:px-15">
      <form className="flex bg-[#f0f8ff] h-14 items-center justify-between w-full max-w-3xl rounded-lg shadow-md">

        <div className="sm:hidden hidden md:block">
          <button type="button" className="flex items-center px-4 sm:px-6 text-black font-semibold bg-slate-200 hover:bg-slate-300 h-10 sm:h-12 ml-2 sm:ml-1 rounded-md">
            Photos
            <FaAngleRight className="text-black" size={20} />
          </button>
        </div>
        <input type="text" className="flex sm:w-[20px] lg:w-[100%] text-black bg-[#f0f8ff] py-2 px-2 outline-none select-none placeholder-gray-500 ml-2 " name="Search" placeholder="Search for free photos" />

        <button type="submit" className="h-10 sm:h-12 w-10 sm:w-12 mr-2 sm:mr-1 flex items-center justify-center rounded-md bg-transparent hover:bg-slate-300">
          <IoSearch className="text-black" size={20} />
      </button>
    </form>
  </div>
  );
}
