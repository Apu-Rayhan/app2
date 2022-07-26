import React from "react";

const Section2 = () => {
  return (
    <>
      <section className=" border w-full hight mt-2    ">
        <div className=" border bg-slate-600 mt-4  w-full h-20 justify-center items-center flex">
          <div className=' bg-black h-1 w-96'></div><h1 className=" text-3xl font-bold">Our Service </h1><div className=' bg-black h-1 w-96'></div>
          
        </div>
        <div className=" flex space-x-4 justify-around items-center mt-4  ">
          <ServiceCard
            props={{
              serviceName: "Web Developer ",
              serviceDeteles:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum vehicula sagittis. Aliquam feugiat vehicula nibh vestibulum consectetur.",
            }}
          />

          <ServiceCard
            props={{
              serviceName: "Digital marketing",
              serviceDeteles:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum vehicula sagittis. Aliquam feugiat vehicula nibh vestibulum consectetur.",
            }}
          />

          <ServiceCard
            props={{
              serviceName: "Graphic design",
              serviceDeteles:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum vehicula sagittis. Aliquam feugiat vehicula nibh vestibulum consectetur.",
            }}
          />
        </div>
      </section>
    </>
  );
};

const ServiceCard = ({ props }) => {
  return (
    <>
      <div className=" border w-1/4 h-80  rounded-md  ">
        <h1 className=" w-full border h-14 mt-5  font-bold text-center text-2xl text-red-600  ">
          {props.serviceName}
        </h1>
        <p className=" text-center border mt-2  ">{props.serviceDeteles}</p>
      </div>
    </>
  );
};

export default Section2;
