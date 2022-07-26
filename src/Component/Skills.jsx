import React from "react";

const Skills = () => {
  return (
    <>
      <section className=" border w-full hight mt-5 ">
        <div className="border w-3/4 h-96 m-auto mt-5 ">
          <div className="border h-16 flex justify-center items-center font-bold text-3xl uppercase ">
            <h1 className="  "> professional Skills </h1>
          </div>

          <div className="border m-auto mt-5 w-2/4">
            <ProgressBar witd= 'w-11/12' color='bg-lime-500' html='Html'/>
            <ProgressBar witd= 'w-11/12' color='bg-red-500' html="CSS" />
            <ProgressBar witd= 'w-2/3' color='bg-red-300' html="Javascript" />
            <ProgressBar witd= 'w-2/3' color='bg-red-200' html="React js " />
            <ProgressBar witd= 'w-2/3' color='bg-red-100' html="Node js " />
            
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
        <div className={` h-7 rounded-xl ${props.color} ${props.witd} text-black` }> {props.html} </div>
        
      </div>
    </>
  );
};

export default Skills;
