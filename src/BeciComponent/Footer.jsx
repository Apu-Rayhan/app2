import React from "react";
import Socialicon from "../Component/Social-icon";

const Footer = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center h-40 bg-indigo-900 text-white ">
        <Socialicon />
        <h2>The copyright symbol: &copy;</h2>
      </div>
    </>
  );
};

export default Footer;
