import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-red-200 flex items-center justify-center py-5 md:font-bold space-x-2 md:space-x-8 text-[20px]">
      <Link to="/" className="uppercase hover:text-red-500">
        Home
      </Link>
      <Link to="/show-movies" className="uppercase hover:text-red-500">
        Show Movies
      </Link>
      <Link to="/add-movies" className="uppercase hover:text-red-500">
        Add Movies
      </Link>
    </nav>
  );
};

export default Navbar;
