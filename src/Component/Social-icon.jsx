import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

const Socialicon = () => {
  return (
    <>
      <div className=" flex justify-center items-center border w-96 h-16  ">
        <a className=" pr-4 text-2xl  " href=" " target="_blank"><AiFillFacebook /></a>
        <a className=" pr-4 text-2xl  " href="" target="_blank"> <AiFillLinkedin /> </a>
        <a className=" pr-4 text-2xl  " href="" target="_blank"> <AiOutlineMail /> </a>
        <a className=" pr-4 text-2xl  " href="" target="_blank"> <AiOutlineWhatsApp /> </a>
        <a className=" pr-4 text-2xl  " href="" target="_blank"> <BsTelegram /> </a>
      </div>
    </>
  );
};

export default Socialicon;
