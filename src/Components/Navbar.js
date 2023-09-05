import React from "react";
// import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "../Components/Navbar.css";

function Navbar(props) {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const autoClose = () => {
    setNav(!nav);
    function scrollToTop() {
      if (
        document.body.scrollTop !== 0 ||
        document.documentElement.scrollTop !== 0
      ) {
        window.scrollBy(0, -30);
        requestAnimationFrame(scrollToTop);
      }
    }
    scrollToTop();
  };

  // bg-[#FFC544]

  return (
    <div className="navbarGradient flex items-center h-14 mx-auto px-4 text-[#212121] bg-[#FFC544] font-sans xl:h-10">
      {/* <img src={logo} className="mr-3 sm:h-9 w-12 h-12" alt="RecipeBook" /> */}
      <span className="w-full font-black text-[#315185]">Pumpkin Patch</span>
      <ul className="hidden md:flex space-x-10">
        <Link
          to="/"
          className="block text-xs font-bold py-2 pl-3 pr-4 text-black rounded hover:text-[#ab4c4b] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-[#43983e] dark:hover:bg-gray-700 dark:hover:text-[#c57472] md:dark:hover:bg-transparent"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block text-xs font-bold py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-[#ae4343] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          About
        </Link>
        <Link
          to="/curriculum"
          className="block text-xs font-bold py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-[#394293] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Curriculum
        </Link>
        <Link
          to="/faq"
          className="block text-xs font-bold py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-[#c48357] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          FAQ
        </Link>
        <Link
          to="/contact"
          className="block text-xs font-bold py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-[#a2a44a] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Contact
        </Link>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[80%] h-[100%] border-r navbarGradientPhone ease-in-out duration-500 z-10"
            : "ease-in-out duration-500 fixed left-[-100%] z-10"
        }
      >
        <h1 className="w-full font-black text-[#315185] m-4">Pumpkin Patch</h1>
        <Link to="/">
          <li
            className="p-4 border-b border-gray-600 font-bold"
            onClick={autoClose}
          >
            <Link to="/">Home</Link>
          </li>
        </Link>
        <Link to="/about">
          <li
            className="p-4 border-b border-gray-600 font-bold"
            onClick={autoClose}
          >
            <Link to="/about">About</Link>
          </li>
        </Link>

        <Link to="/curriculum">
          <li
            className="p-4 border-b border-gray-600 font-bold"
            onClick={autoClose}
          >
            <Link to="/curriculum">Curriculum</Link>
          </li>
        </Link>

        <Link to="/faq">
          <li
            className="p-4 border-b border-gray-600 font-bold"
            onClick={autoClose}
          >
            <Link to="/faq">FAQ</Link>
          </li>
        </Link>

        <Link to="/contact">
          <li
            className="p-4 border-b border-gray-600 font-bold"
            onClick={autoClose}
          >
            <Link to="/contact">Contact</Link>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
