import React from "react";

const Skills = () => {
  return (
    <>
      <section className=" border w-full hight ">
        <div className="border w-3/4 h-96 m-auto ">
          <div className="border ">
            <h1> professional Skills </h1>
          </div>

          <div className="border  m-4 ">
            <ProgressBar per="90" witd="100" />
          </div>
        </div>
      </section>
    </>
  );
};

const ProgressBar = (props) => {
  return (
    <>
      <progress
        className="block m-1 w-1/2 h-6  "
        max={props.witd}
        value={props.per}
      >
        50%
      </progress>

      <div className=" w-2/3 h-6 rounded-md bg-slate-500">
        <div className=" w-2/3 h-6 bg-lime-500 rounded-md "> </div>
      </div>
    </>
  );
};

export default Skills;
