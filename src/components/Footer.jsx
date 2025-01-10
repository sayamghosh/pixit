import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-wrap gap-6 justify-between py-8 mx-5 sm:mx-10 lg:mx-20 overflow-hidden">

        <div id="First Column" className="flex flex-col gap-8 w-full sm:w-6/12 lg:w-4/12">

            <div id="Tag line" className="flex font-semibold font-sans text-3xl md:text-4xl">
                <h1 className="text-black select-none"> Where stories come <br /> together.</h1>
            </div>

            <div id="Download Buttons" className="grid grid-col-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-3">
                <button className="select-none font-semibold text-black bg-slate-200 hover:bg-slate-300 rounded-lg px-3 py-2"><a href="#">Download on iOS</a></button>
                <button className="select-none font-semibold text-black bg-slate-200 hover:bg-slate-300 rounded-lg px-3 py-2"><a href="#">Download on Android</a></button>
            </div>

            <div id="Social media links" className="flex gap-3 select-none flex-wrap">
              <a href="#"><img className="w-8" src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png" alt="Social Icon" /></a>
              <a href="#"><img className="w-8" src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png" alt="Social Icon" /></a>
              <a href="#"><img className="w-8" src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png" alt="Social Icon" /></a>
              <a href="#"><img className="w-8" src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png" alt="Social Icon" /></a>
              <a href="#"><img className="w-8" src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png" alt="Social Icon" /></a>
              <a href="#"><img className="w-8" src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png" alt="Social Icon" /></a>
            </div>
        </div>

    
        <div id="Second Column" className="flex flex-col gap-3 w-3/6 lg:w-3/12 xl:w-2/12">
            <p className="select-none text-lg md:text-xl text-slate-600">WALL BITS</p>
            <a className="select-none text-lg md:text-xl text-black" href="#">Free Stock Photos</a>
            <a className="select-none text-lg md:text-xl text-black" href="#">Free Videos</a>
            <a className="select-none text-lg md:text-xl text-black" href="#">Popular Searches</a>
            <a className="select-none text-lg md:text-xl text-black" href="#">Collections</a>
            <a className="select-none text-lg md:text-xl text-black" href="#">Challenges</a>
            <a className="select-none text-lg md:text-xl text-black" href="#">Leaderboard</a>
            <a className="select-none text-lg md:text-xl text-black" href="#">Other plugins & apps</a>
        </div>


        <div id="Third Column" className="flex flex-col gap-3 w-2/6 lg:w-2/12 xl:w-2/12">
            <p className="select-none text-lg md:text-xl text-slate-600">COMPANY</p>
            <a className="select-none text-lg md:text-xl text-black" href="#">About</a>
            <a className="select-none text-lg md:text-xl text-black" href="#">Blog</a>
            <a className="select-none text-lg md:text-xl text-black" href="#">Help Center</a>
            <a className="select-none text-lg md:text-xl text-black" href="#">Report content</a>
            <a className="select-none text-lg md:text-xl text-black" href="#">Become a Hero</a>
            <a className="select-none text-lg md:text-xl text-black" href="#">Partner with Pexels</a>
            <a className="select-none text-lg md:text-xl text-black" href="#">Image & Video API</a>
            <a className="select-none text-lg md:text-xl text-black" href="#">Sign Up</a>
        </div>


        <div id="Last Column Categories" className="flex flex-col gap-3 w-full sm:w-full md:w-full lg:w-3/12">
            <p className="select-none text-lg md:text-xl text-slate-600">FREE STOCK PHOTOS</p>
            <div className="grid grid-col-1 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-2 gap-3">
                <a className="flex select-none text-lg text-black border-2 border-slate-300 rounded-lg py-1 justify-center w-full" href="#">Wallpaper</a>
                <a className="flex select-none text-lg text-black border-2 border-slate-300 rounded-lg py-1 justify-center w-full" href="#">Wallpaper</a>
                <a className="flex select-none text-lg text-black border-2 border-slate-300 rounded-lg py-1 justify-center w-full" href="#">Wallpaper</a>
                <a className="flex select-none text-lg text-black border-2 border-slate-300 rounded-lg py-1 justify-center w-full" href="#">Wallpaper</a>
                <a className="flex select-none text-lg text-black border-2 border-slate-300 rounded-lg py-1 justify-center w-full" href="#">Wallpaper</a>
                <a className="flex select-none text-lg text-black border-2 border-slate-300 rounded-lg py-1 justify-center w-full" href="#">Wallpaper</a>
                <a className="flex select-none text-lg text-black border-2 border-slate-300 rounded-lg py-1 justify-center w-full" href="#">Wallpaper</a>
                <a className="flex select-none text-lg text-black border-2 border-slate-300 rounded-lg py-1 justify-center w-full" href="#">Wallpaper</a>
                <a className="flex select-none text-lg text-black border-2 border-slate-300 rounded-lg py-1 justify-center w-full" href="#">Wallpaper</a>
                <a className="flex select-none text-lg text-black border-2 border-slate-300 rounded-lg py-1 justify-center w-full" href="#">Wallpaper</a>
                <a className="flex select-none text-lg text-black border-2 border-slate-300 rounded-lg py-1 justify-center w-full" href="#">Wallpaper</a>
                <a className="flex select-none text-lg text-black border-2 border-slate-300 rounded-lg py-1 justify-center w-full" href="#">Wallpaper</a>
            </div>
        </div>
        <div className="text-zinc-800 w-full flex justify-center mt-10">
            <div className="text-center">
                <h3 className="text-lg">A passion project of Amit Ghosh ❤️</h3>
                <h4>Made in collaboration with Mriganka and Sayam</h4>
                <h3>© 2025 Pixit</h3>
            </div>
            
        </div>
  </div>

  );
}