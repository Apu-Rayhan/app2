import React from "react";
import Nav from "./Nav";
import Router from "./Router";

const Header = () => {
  return (
    <>
      <div className="w-full h-14 bg-indigo-900 text-white flex ">
        <Nav />
      </div>
      <Router />
    </>
  );
};

export default Header;
