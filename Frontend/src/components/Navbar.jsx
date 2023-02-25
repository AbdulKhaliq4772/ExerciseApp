import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className=" bg-amber-300 uppercase p-4 text-3xl font-bold ">
        <Link to="/">
          <h1>Workout buddy</h1>
        </Link>
      </header>
    </div>
  );
};

export default Navbar;
