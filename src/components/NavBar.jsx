import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";

const NavBar = () => {
  const navItems = (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );

  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setTheme(savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    const appliedTheme = newTheme ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", appliedTheme);
    localStorage.setItem("theme", appliedTheme);
  };

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-7xl mx-auto px-5 md:px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a className="text-3xl font-bold hidden md:flex">
            Be<span className="text-orange-400">A</span>Dev
          </a>
        </div>
        <div className="navbar-center md:hidden">
          <a className="text-3xl font-bold  ">
            Be<span className="text-orange-400">A</span>Dev
          </a>
        </div>
        <div className="navbar-end">
          <div>
            <button type="button" onClick={toggleTheme}>
              {theme ? <FaMoon size={25} /> : <MdOutlineWbSunny size={25} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
