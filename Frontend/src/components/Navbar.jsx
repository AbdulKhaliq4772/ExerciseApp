import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className=" bg-blue-500  text-white uppercase p-4 text-3xl font-bold ">
        <Link to="/">
          <h1>Exercise Tracker</h1>
        </Link>
      </header>
    </div>
  );
};

export default Navbar;
