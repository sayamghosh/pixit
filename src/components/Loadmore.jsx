import React from "react";

export default function Loadmore({searchCurated}) {

  return (
    <div className="flex justify-center mt-4 mb-4 mx-5 sm:mx-10 lg:mx-20 cursor-pointer">
      <h2
        className="h-12 justify-center items-center font-medium text-lg border-[1px] rounded-xl hover:bg-slate-200 hover:border-black px-10 py-2 font-sans text-black"
        onClick={searchCurated}
      >
        Load More
      </h2>
    </div>
  );
}
