import React from 'react'

export default function Midbar() {
  return (
    <div className="flex justify-center overflow-hidden gap-2 my-6 mx-5 sm:mx-10 lg:mx-20">
        <a className="flex font-medium text-lg justify-center items-center font-sans text-black hover:bg-slate-200 focus:bg-black focus:text-white px-8 py-4  rounded-full" href="#">Home</a>
        <a className="flex font-medium text-lg justify-center items-center font-sans text-black hover:bg-slate-200 focus:bg-black focus:text-white px-8 py-4  rounded-full" href="#">Videos</a>
        <a className="flex font-medium text-lg justify-center items-center font-sans text-black hover:bg-slate-200 focus:bg-black focus:text-white px-8 py-4  rounded-full" href="#">Leaderboard</a>
        <a className="flex font-medium text-lg justify-center items-center font-sans text-black hover:bg-slate-200 focus:bg-black focus:text-white px-8 py-4  rounded-full" href="#">Challenges</a>
    </div>
  )
}
