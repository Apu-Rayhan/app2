import React from "react";
import Socialicon from "./Social-icon";

const NameCom = ({ props}) => {
  return (
    <>
      <div className=" w-full h-96 border m-auto mt-2 flex flex-col items-center ">
        <div className=" border w-11/12 h-1/2 m-auto flex flex-col text-center justify-center items-center  ">
          <h1 className=" text-2xl text-red-700 ">{props.work}</h1>
          <p>{props.para}</p>
        </div>
        <Socialicon />
      </div>
    </>
  );
};

export default NameCom;
