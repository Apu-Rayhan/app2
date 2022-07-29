import React from "react";

const SectionName = (props) => {
  return (
    <>
      <div className=" flex justify-center items-center border w-full bg-black ">
        <div className=" bg-white h-1 w-96"></div>
        <h1 className=" text-3xl font-bold">{props.name} </h1>
        <div className=" bg-white h-1 w-96"></div>
      </div>
    </>
  );
};

export default SectionName;
