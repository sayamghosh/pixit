import React from 'react'

export default function Navbar() {
  return (
    <nav className="flex sticky top-1 justify-between border-none h-12 items-center px-4 overflow-hidden">
        <div className=''>
          <h1 className="font-extrabold cursor-pointer">LOGO</h1>
        </div>
        <div className=''>
          <ul className="flex gap-5 items-center">
            <li className="cursor-pointer ">Explore</li>
            <li className="cursor-pointer ">License</li>
            <button className="select-none font-medium px-8 py-1 rounded-md bg-slate-200 hover:bg-slate-300 text-black" type="submit">Login</button>
          </ul>
        </div>
      </nav>
  )
}