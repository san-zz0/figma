import { useState } from "react";
import { images } from "../assets/data";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full px-6 relative">
      <div className="max-w-7xl mx-auto pt-6 flex items-center justify-between">
        <div className="text-3xl font-semibold tracking-wide">
          <span className="text-black font-post-no-bills-colombo">FOREVER</span>
          <span className="text-pink-400">.</span>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700">
          <a href="#">HOME</a>
          <a href="#collections">COLLECTION</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <div className="flex items-center gap-6">
          <img
            src={images.search_icon}
            alt="search"
            className="w-5 h-5 cursor-pointer"
          />
          <img
            src={images.profile_icon}
            alt="profile"
            className="w-5 h-5 cursor-pointer"
          />
          <img
            src={images.lock_icon}
            alt="cart"
            className="w-5 h-5 cursor-pointer"
          />

          <img
            src={images.menu_icon}
            alt="menu"
            className="w-5 h-5 cursor-pointer md:hidden"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-opacity duration-300 ease-in-out ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="py-6 flex flex-col items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#" onClick={() => setOpen(false)}>
            HOME
          </a>
          <a href="#collections" onClick={() => setOpen(false)}>
            COLLECTION
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            ABOUT
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            CONTACT
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
