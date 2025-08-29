import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <NavLink to="/" className="text-2xl font-bold">
        Event Explorer
      </NavLink>
      <div className="space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : "hover:underline"
          }
        >
          Events
        </NavLink>
        <NavLink
          to="/bookmarked"
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : "hover:underline"
          }
        >
          Bookmarked
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
