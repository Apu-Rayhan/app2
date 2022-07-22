import React from "react";

const Section2 = () => {
  return (
    <>
      <section className=" border w-full h-96 mt-2 flex space-x-4 justify-around items-center  ">
        <ServiceCard props={{serviceName:'web developer' , serviceDeteles:'ddjffie kdjfioef  djiueiof' }}/>
        <ServiceCard props={{serviceName:'web developer' , serviceDeteles:'ddjffie kdjfioef  djiueiof' }}/>
        <ServiceCard props={{serviceName:'web developer' , serviceDeteles:'ddjffie kdjfioef  djiueiof' }}/>
        
      </section>
    </>
  );
};

const ServiceCard = ({props}) => {
  return (
    <>
      <div className=" border w-1/4 h-80 bg-slate-500 rounded-md   ">
        <h1>{props.serviceName}</h1>
        <p>{props.serviceDeteles}</p>
      </div>
    </>
  );
};

export default Section2;
