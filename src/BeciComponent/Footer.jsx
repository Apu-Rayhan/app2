import React from "react";
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
      <div className=" flex justify-center items-center h-40 bg-indigo-900 text-white ">
        <div>
          <AiFillFacebook className=" mr-4" />
          <AiFillLinkedin className=" mr-4" />
          <AiOutlineWhatsApp className=" mr-4" />
          <BsTelegram className=" mr-4" />
          <AiOutlineMail className=" mr-4 text-2xl   " />
        </div>

        <h2>The copyright symbol: &copy;</h2>
      </div>
    </>
  );
};

export default Footer;
