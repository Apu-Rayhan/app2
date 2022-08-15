import React from "react";
import SectionName from "./SectionName";

const Section2 = () => {
  return (
    <>
    
    
    <SectionName name="Our Service"/>
    
      <section className=" border w-full hight mt-2    ">
        <div className=" border mt-4  w-full h-20 justify-center items-center flex">
        </div>
        <div className=" flex space-x-4 justify-around items-center mt-4  ">
          <ServiceCard
            props={{
              serviceName: "Web Developer ",
              serviceDeteles:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum vehicula sagittis. Aliquam feugiat vehicula nibh vestibulum consectetur.", color:"bg-stone-900"
            }}
          />

          <ServiceCard
            props={{
              serviceName: "Digital marketing",
              serviceDeteles:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum vehicula sagittis. Aliquam feugiat vehicula nibh vestibulum consectetur.", color:"bg-stone-900"
            }}
          />

          <ServiceCard
            props={{
              serviceName: "Graphic design",
              serviceDeteles:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum vehicula sagittis. Aliquam feugiat vehicula nibh vestibulum consectetur.", color:"bg-stone-900"
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
      <div className={`border w-1/4 h-80  rounded-md ${props.color}`}>
        <h1 className=" w-full border h-14 mt-5  font-bold text-center text-2xl text-red-600  ">
          {props.serviceName}
        </h1>
        <p className=" text-center border mt-2  ">{props.serviceDeteles}</p>
      </div>
    </>
  );
};

export default Section2;
