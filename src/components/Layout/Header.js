import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ targetRef }) => {
  const [burgerClicked, setBurgerClicked] = useState(false);
  const toggleHamburger = () => {
    setBurgerClicked(!burgerClicked);
  };

  return (
    <header className="sticky bg-white top-0">
      <nav className="flex justify-between p-6 mx-4">
        <div className=" text-xl font-bold">Fida.dev</div>
        <div
          className="sm:hidden bg-gray-400  p-2 absolute right-2"
          onClick={toggleHamburger}
        >
          {burgerClicked ? <div>&#x2613;</div> : <div>&#9776;</div>}
        </div>
        <div className="">
          <ul
            className={`flex  ${
              burgerClicked
                ? "flex-col items-center absolute  top-16 bg-gray-300 text-2xl w-1/2 h-fit  transition ease-in-out delay-150 duration-500 -translate-x-full"
                : " hidden h-0 translate-x-0  "
            }  sm:block `}
          >
            <a
              href="#home"
              className="ml-3 font-bold hover:border-b-2 border-black my-3 "
            >
              Home
            </a>
            <a
              href="#about"
              className="ml-3 font-bold hover:border-b-2 border-black my-3"
            >
              About
            </a>
            <a
              href="#projects"
              className="ml-3 font-bold hover:border-b-2 border-black my-3"
            >
              Projects
            </a>
            <a
              href="#contactUs"
              className="ml-3 font-bold hover:border-b-2 border-black my-3"
            >
              Contact Us
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
