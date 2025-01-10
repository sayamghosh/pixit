"use client";
import { IoSearch } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Search_Nav({ query }) {
  const [search, setSearch] = useState(query);
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <nav className="flex justify-between border-none u items-center px-4 py-2 overflow-hidden text-black bg-white">
      <div id="Site Logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="30"
          fill="none"
          viewBox="0 0 82 40"
        >
          <path
            fill="#FFD43D"
            d="M73.365 19.71c0 2.904-2.241 5.31-5.27 5.31-3.03 0-5.228-2.406-5.228-5.31 0-2.905 2.199-5.312 5.228-5.312s5.27 2.407 5.27 5.311Z"
          ></path>
          <path
            fill="#FF0C81"
            d="M48.764 19.544c0 2.946-2.323 5.145-5.27 5.145-2.904 0-5.227-2.2-5.227-5.145 0-2.947 2.323-5.104 5.228-5.104 2.946 0 5.27 2.158 5.27 5.104Z"
          ></path>
          <path
            fill="#11EEFC"
            d="M20.074 25.02c3.029 0 5.27-2.406 5.27-5.31 0-2.905-2.241-5.312-5.27-5.312-3.03 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312Z"
          ></path>
          <path
            fill="#171A26"
            d="M68.095 30.54c-6.307 0-11.12-4.897-11.12-10.872 0-5.934 4.855-10.83 11.12-10.83 6.349 0 11.162 4.938 11.162 10.83 0 5.975-4.855 10.871-11.162 10.871Zm0-5.52c3.03 0 5.27-2.406 5.27-5.31 0-2.905-2.24-5.312-5.27-5.312-3.029 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312ZM43.08 40c-4.813 0-8.506-2.116-10.373-5.934l4.896-2.655c.913 1.784 2.614 3.195 5.394 3.195 3.486 0 5.85-2.448 5.85-6.473v-.374c-1.12 1.411-3.111 2.49-6.016 2.49-5.768 0-10.373-4.481-10.373-10.581 0-5.934 4.813-10.788 11.12-10.788 6.431 0 11.162 4.605 11.162 10.788v8.299C54.74 35.27 49.76 40 43.08 40Zm.415-15.311c2.946 0 5.27-2.2 5.27-5.145 0-2.947-2.324-5.104-5.27-5.104-2.905 0-5.228 2.158-5.228 5.104s2.323 5.145 5.228 5.145ZM20.074 30.54c-6.307 0-11.12-4.897-11.12-10.872 0-5.934 4.854-10.83 11.12-10.83 6.348 0 11.162 4.938 11.162 10.83 0 5.975-4.855 10.871-11.162 10.871Zm0-5.52c3.029 0 5.27-2.406 5.27-5.31 0-2.905-2.241-5.312-5.27-5.312-3.03 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312ZM0 0h5.892v30H0V0ZM82 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
          ></path>
        </svg>
      </div>

      <div
        id="Search Bar"
        className="w-full flex  items-center justify-center px-4 sm:px-10 lg:px-15"
      >
        <form
          className="flex bg-[#f7f7ff] h-14 items-center justify-between w-full max-w-3xl rounded-lg shadow-md"
          onSubmit={handleSearch}
        >
          <div className="sm:hidden hidden md:block">
            <button
              type="button"
              className="flex items-center px-4 sm:px-6 text-black font-semibold bg-slate-200 hover:bg-slate-300 h-10 sm:h-12 ml-2 sm:ml-1 rounded-md"
            >
              Photos
              <FaAngleRight className="text-black" size={20} />
            </button>
          </div>

          <input
            type="text"
            className="flex w-full text-black bg-[#f7f7ff] py-2 px-2 outline-none select-none placeholder-gray-500 ml-2 "
            name="Search"
            placeholder="Search for free photos"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="hidden lg:block md:block sm:block">
            <button
              type="submit"
              className="h-10 sm:h-12 w-10 sm:w-12 mr-2 sm:mr-1 flex items-center justify-center rounded-md bg-transparent hover:bg-slate-300"
            >
              <IoSearch className="text-black" size={20} />
            </button>
          </div>
        </form>
      </div>

      <div id="Explore, License & Login" className="hidden lg:block md:block">
        <ul className="flex gap-5 items-center">
          <li className="cursor-pointer ">Explore</li>
          <li className="cursor-pointer ">License</li>
          <button
            className="select-none font-medium px-8 py-1 rounded-md bg-slate-200 hover:bg-slate-300 text-black"
            type="submit"
          >
            Login
          </button>
        </ul>
      </div>
    </nav>
  );
}
