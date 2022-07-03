import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center h-40 bg-indigo-900 text-white ">
        <div className=" flex w-96 h-16 justify-center items-center    ">
          <Link to="/#">
            <AiFillFacebook className=" mr-4 text-2xl " />
          </Link>
          <AiFillLinkedin className=" mr-4 text-2xl " />
          <AiOutlineWhatsApp className=" mr-4 text-2xl " />
          <BsTelegram className=" mr-4 text-2xl " />
          <AiOutlineMail className=" mr-4 text-2xl   " />
        </div>
        <h2>The copyright symbol: &copy;</h2>
      </div>
    </>
  );
};

export default Footer;
