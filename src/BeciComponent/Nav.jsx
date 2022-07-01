import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className=" w-2/4 h-12 m-auto bg-slate-600 items-center justify-center flex ">
        <NavLink className="mr-4" to="/">
          Home
        </NavLink>
        <NavLink className="mr-4" to="/about">
          About
        </NavLink>
        <NavLink className=" mr-4" to="/project">Project</NavLink>
        <NavLink className=" mr-4 font-serif 	 " to="/login">Log in/out</NavLink>
        
      </div>
    </>
  );
};

export default Nav;
