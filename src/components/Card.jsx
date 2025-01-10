import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

export default function Card({ data }) {
  const { photographer, photographer_url } = data;

  const downloadImage = async (url) => {
    try {
      const response = await fetch(url, { mode: "cors" }); // Fetch the image data
      const blob = await response.blob(); // Convert the response to a Blob
      const link = document.createElement("a"); // Create a temporary anchor tag
      link.href = URL.createObjectURL(blob); // Create a downloadable object URL
      link.download = "image.jpg"; // Set the default file name
      document.body.appendChild(link); // Append the anchor to the document
      link.click(); // Programmatically click the anchor to trigger the download
      document.body.removeChild(link); // Clean up the DOM
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${data.src.landscape})` }}
      className={`cursor-pointer h-72 w-full rounded-lg flex bg-cover bg-center group `}
    >
      <div className="hidden group-hover:flex transition-all flex-col justify-between w-full">
        <div className="w-full flex justify-end p-2">
          <FaRegHeart />
        </div>
        <div className="flex mx-auto items-center justify-between bg-gradient-to-b from-gray-900/10 to-gray-500/90 w-full px-2 ">
          <div className="flex items-center gap-3 py-1">
            <img
              className="h-12 w-12 rounded-[50%]"
              src="https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <a href={photographer_url} target="_blank" rel="noopener noreferrer">
              <h1 className="font-bold select-none text-[#f0f8ff]">
                {photographer}
              </h1>
            </a>
          </div>
          <button
            onClick={() => downloadImage(data.src.original)} // Trigger download on click
            className="flex items-center gap-1 bg-green-500 hover:bg-green-600 px-3 py-2 rounded-lg"
          >
            <IoMdDownload />
            <h3 className="hidden lg:block">Download</h3>
          </button>
        </div>
      </div>
    </div>
  );
}
