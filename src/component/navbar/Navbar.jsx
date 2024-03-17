import React from "react";
import { IoIosContact } from "react-icons/io";
import { TfiSearch } from "react-icons/tfi";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-white text-black font-semibold">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
                <ul className="p-2 bg-white">
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a>Search</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Recipes</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost  font-serif  text-[13px] lg:text-3xl font-bold sm:break-words ">
            WRINCLE CALORIES
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-xl text-[#150B2BB3]">
            <li>
              <a>Home</a>
            </li>
            <li>
              <details>
                <summary>Recipes</summary>
                <ul className="p-2">
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a>Search</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end relative">
        <TfiSearch className=" absolute right-[40px] lg:right-[100px] text-xl lg:text-2xl font-bold " />
        <input type="text" placeholder="search here.." className="input rounded-2xl input-secondary  w-28 h-10  lg:h-14 bg-white border-[#0BE58A]  lg:w-full max-w-xs" />
        <IoIosContact className="bg-[#0BE58A]  rounded-full text-black text-4xl lg:text-5xl ml-0 lg:ml-4" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
