import React from "react";
import Nav from "./Nav";
import Router from "./Router";
import { BiUserCircle } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <div className="w-full h-14 bg-indigo-900 text-white flex sticky top-0 z-10 ">
        <Nav />
        <button className=" mr-6" onClick={()=>alert("Hello User")}>
        <BiUserCircle className=" text-3xl mt-2"/>
        </button>
        
      </div>
      
      <Router />
      
    </>
  );
};

export default Header;
