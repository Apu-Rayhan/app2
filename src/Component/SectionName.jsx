import React from "react";

const SectionName = (props) => {
  return (
    <>
      <div className=" flex justify-center items-center border w-10/12 rounded-full m-auto h-20 bg-slate-800 ">
        <div className=" bg-yellow-400 h-1 w-96"></div>
        <h1 className=" text-3xl font-bold">{props.name} </h1>
        <div className=" bg-yellow-400 h-1 w-96"></div>
        </div>
        </>
  );
};

export default SectionName;
