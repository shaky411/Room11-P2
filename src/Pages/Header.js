import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      {/* <div class="lg:hidden">
        <button class="navbar-burger flex items-center text-blue-600 p-3">
          <svg
            class="block h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div> */}
      <ul className="flex justify-center text-slate-500 space-x-10 p-6 bg-slate-200">
        <li className="nav-item hover:text-pink-500">
          <NavLink
            to="/room11-p2/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item hover:text-pink-500">
          <NavLink
            to="/room11-p2/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
        </li>
        
        
        <li className="nav-item hover:text-pink-500">
          <NavLink
            to="/room11-p2/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
