import React from "react";
import SectionName from "./SectionName";

const Skills = () => {
  return (
    <>
      <SectionName name="Professional Skills" />
      <section className=" border w-full hight mt-5 ">
        <div className="border w-3/4 h-96 m-auto mt-5 ">
          <div className="border h-16 flex justify-center items-center font-bold text-3xl uppercase ">
            <h1 className="  ">Professional Skills</h1>
          </div>

          <div className="border m-auto mt-5 w-2/4">
            <ProgressBar witd="w-11/12" color="bg-indigo-900" html="Html" />
            <ProgressBar witd="w-11/12" color="bg-indigo-700" html="CSS" />
            <ProgressBar witd="w-2/3" color="bg-indigo-500" html="Javascript" />
            <ProgressBar witd="w-2/3" color="bg-indigo-400" html="React js " />
            <ProgressBar witd="w-2/3" color="bg-indigo-300" html="Node js " />
          </div>
        </div>
      </section>
    </>
  );
};

const ProgressBar = (props) => {
  return (
    <>
      <div className=" w-full h-7 rounded-xl bg-slate-500 my-2">
        <div
          className={` h-7 rounded-xl ${props.color} ${props.witd} text-black`}
        >
          {" "}
          {props.html}{" "}
        </div>
      </div>
    </>
  );
};

export default Skills;
