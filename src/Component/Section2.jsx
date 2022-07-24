import React from "react";

const Section2 = () => {
  return (
    <>
      <section className=" border w-full hight mt-2    ">
        <div className=" border  w-full h-20 justify-center items-center flex">
          <h1 className="">Our Service </h1>
        </div>
        <div className=" flex space-x-4 justify-around items-center  ">
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
      <div className=" border w-1/4 h-80  rounded-md   ">
        <h1 className=" font-black text-center relative top-1/4 text-2xl text-red-600  ">
          {props.serviceName}
        </h1>
        <p className=" text-center relative top-1/3 ">{props.serviceDeteles}</p>
      </div>
    </>
  );
};

export default Section2;
