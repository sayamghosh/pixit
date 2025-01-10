import React from 'react'

export default function Midbar2() {
  return (
    <div className="flex justify-between gap-2 overflow-hidden mt-4 mb-4 mx-5 sm:mx-10 lg:mx-20">
        <h1 className=" flex items-center font-sans font-semibold text-2xl text-black">Free Stock Photos</h1>
        <a className=" flex h-12 justify-center items-center font-medium text-lg border-[1px] rounded-xl hover:bg-slate-200 hover:border-black px-10 py-2 font-sans text-black" href="#">Trending</a>
    </div>
  )
}